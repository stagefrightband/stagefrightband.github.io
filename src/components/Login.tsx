import React, { useEffect, useState } from "react";
import { createClient, Session } from "@supabase/supabase-js";
import "../styles.css";

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}
interface ToggleClassBasedOnCookieParams {
  cookieName: string;
  className: string;
}
function toggleClassBasedOnCookie({
  cookieName,
  className,
}: ToggleClassBasedOnCookieParams): void {
  const cookieValue = getCookie(cookieName) === "true";
  if (cookieValue) {
    document.documentElement.classList.add(className);
  } else {
    document.documentElement.classList.remove(className);
  }
}
const Login: React.FC = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [isSignup, setIsSignup] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [signupError, setSignupError] = useState(false);
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "";
  const supabaseAnonKey = process.env.REACT_APP_ANON_KEY || "";
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase URL and Anon Key are required.");
  }
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  useEffect(() => {
    toggleClassBasedOnCookie({
      cookieName: "highcontrast",
      className: "high-contrast",
    });
    toggleClassBasedOnCookie({
      cookieName: "opendyslexic",
      className: "open-dyslexic",
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error(error);
      setLoginError(true); // Set error state on login failure
    } else {
      setSession(data.session);
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    const { error, data } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error(error);
      setSignupError(true); // Set error state on signup failure
    } else {
      setSession(data.session);
    }
  };

  const closeErrorPopup = () => {
    setLoginError(false);
  };

  const closeSignupErrorPopup = () => {
    setSignupError(false);
  };

  if (session) {
    return <div>Logged in!</div>;
  }

  return (
    <div className="auth-container">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="booking-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="booking-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <button className="sign-up-button" onClick={() => setIsSignup(true)}>
            Sign Up
          </button>
        </p>
      </div>

      {isSignup && (
        <div className="signup-overlay">
          <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
              <div className="booking-field">
                <label htmlFor="signup-email">Email</label>
                <input
                  type="email"
                  id="signup-email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="booking-field">
                <label htmlFor="signup-password">Password</label>
                <input
                  type="password"
                  id="signup-password"
                  name="password"
                  autoComplete="new-password"
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Sign Up
              </button>
            </form>
            <button className="back-button" onClick={() => setIsSignup(false)}>
              Back to Login
            </button>
          </div>
        </div>
      )}

      {loginError && (
        <div className="error-overlay">
          <div className="error-popup">
            <h2>Error!</h2>
            <p>
              There was an unexpected error when logging in. Please try again.
            </p>
            <button onClick={closeErrorPopup}>Ok</button>
          </div>
        </div>
      )}

      {signupError && (
        <div className="error-overlay">
          <div className="error-popup">
            <h2>Error!</h2>
            <p>
              There was an unexpected error when signing up. Please try again.
            </p>
            <button onClick={closeSignupErrorPopup}>Ok</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
