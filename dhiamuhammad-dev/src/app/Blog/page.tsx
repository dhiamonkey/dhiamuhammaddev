import React from "react";
import Link from "next/link";
import { google } from "googleapis";

import { BlogFilesSchema } from "@/commons/schemas/page";

interface BlogFiles {
  id: string;
  name: string;
}

const GetData = async (): Promise<BlogFiles[]> => {
  const env_in_string = String(process.env.GOOGLE_DRIVE_SERVICE);
  const key = JSON.parse(env_in_string);

  const jwtClient = new google.auth.JWT(key.client_email, "", key.private_key, [
    "https://www.googleapis.com/auth/drive",
  ]);

  await jwtClient.authorize();

  const drive = google.drive({ version: "v3", auth: jwtClient });
  const folderId = process.env.FOLDER_ID;

  const response = await drive.files.list({
    q: `'${folderId}' in parents and name contains '.md'`,
    fields: "files(id, name)",
  });

  // TODO Make a parser to remove .md and deal with spaces

  const result = BlogFilesSchema.safeParse(response.data.files);

  if (result.success) {
    return result.data;
  } else {
    console.error("Validation failed", result.error);
    return [];
  }
};

export const BlogHead: React.FC = async () => {
  const data = await GetData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Bloghead</h2>
      {data.map((item) => (
        <li key={item.id}>
          <Link href={`/Blog/${item.name}`}>
            <p>{item.name}</p>
          </Link>
        </li>
      ))}
    </main>
  );
};

export default BlogHead;
