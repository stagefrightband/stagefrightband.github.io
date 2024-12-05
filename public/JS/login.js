// Function to get a cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

// Function to apply or remove a class based on cookie value
function toggleClassBasedOnCookie(cookieName, className) {
  const cookieValue = getCookie(cookieName) === "true";
  if (cookieValue) {
    document.documentElement.classList.add(className);
  } else {
    document.documentElement.classList.remove(className);
  }
}

// Check and apply the classes based on the cookies
toggleClassBasedOnCookie("highcontrast", "high-contrast");
toggleClassBasedOnCookie("opendyslexic", "open-dyslexic");

// Optional: If you want to monitor changes in the cookies dynamically
setInterval(() => {
  toggleClassBasedOnCookie("highcontrast", "high-contrast");
  toggleClassBasedOnCookie("opendyslexic", "open-dyslexic");
}, 1000);

const { useState, useEffect } = React;
const { createClient } = supabase;
const { Auth } = supabaseAuthUiReact;
const { ThemeSupa } = supabaseAuthUiShared;

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function Login() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  } else {
    return <div>Logged in!</div>;
  }
}

const rootElement = document.getElementById('login-root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Login />
    </React.StrictMode>
  );
}