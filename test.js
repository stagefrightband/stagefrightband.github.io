// Replace with your own Supabase URL and anon key
const supabaseUrl = "https://cuxsndvcavwlffvywmfo.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1eHNuZHZjYXZ3bGZmdnl3bWZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4NzcwNDYsImV4cCI6MjA0NzQ1MzA0Nn0.UKmCIXv_qSKfeodEUQOVtgVU4pf9aHFMX1ygcV7NMYA";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Test if the connection works by logging a message to the console
supabase
  .from('messages')
  .select('*')
  .then(response => console.log(response));

  // Function to insert the encrypted message into Supabase
async function storeEncryptedMessage(message, encryptedMessage) {
  const { data, error } = await supabase
    .from('messages')
    .insert([{ message: message, encrypted_message: encryptedMessage }]);

  if (error) {
    console.error("Error inserting data:", error);
  } else {
    console.log("Data successfully inserted:", data);
  }
}

// Function to fetch encrypted message from Supabase
async function fetchEncryptedMessage() {
  const { data, error } = await supabase
    .from('messages')
    .select('encrypted_message')
    .limit(1); // Fetch the first record

  if (error) {
    console.error("Error fetching data:", error);
  } else {
    if (data.length > 0) {
      console.log("Fetched Encrypted Message:", data[0].encrypted_message);
    } else {
      console.log("No data found.");
    }
  }
}

document.getElementById("encrypt-btn").addEventListener("click", async () => {
  const message = document.getElementById("message").value;
  const encryptionKey = document.getElementById("encryption-key").value;

  if (message && encryptionKey) {
    const encryptedMessage = encryptData(message, encryptionKey);
    await storeEncryptedMessage(message, encryptedMessage);
    console.log("Message encrypted and stored.");
  } else {
    console.log("Please enter a message and key.");
  }
});

document.getElementById("decrypt-btn").addEventListener("click", async () => {
  const encryptedMessage = document.getElementById("encrypted-message").value;
  const decryptionKey = document.getElementById("decryption-key").value;

  if (encryptedMessage && decryptionKey) {
    const decryptedMessage = decryptData(encryptedMessage, decryptionKey);
    document.getElementById("decrypted-message").textContent = `Decrypted Message: ${decryptedMessage}`;
    console.log("Message decrypted.");
  } else {
    console.log("Please enter the encrypted message and key.");
  }
});