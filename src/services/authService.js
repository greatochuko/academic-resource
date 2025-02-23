import { cookies } from "next/headers";

export async function getSession() {
  try {
    const cookieStore = await cookies();
    const userToken = cookieStore.get("userToken")?.value;
    const res = await fetch(`${process.env.BASE_URL}/api/auth/session`, {
      headers: { Authorization: `Bearer ${userToken}` },
    });

    const data = await res.json();
    console.log({ data });
    if (!res.ok) throw new Error(data.error);

    return { error: null, user: data.user };
  } catch (error) {
    return { error: error.message, user: null };
  }
}
