import { Client, Account , ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Appwrite endpoint
  .setProject("688212b300390d5821bf"); // Replace with your Project ID

export const account = new Account(client);

export { ID };
