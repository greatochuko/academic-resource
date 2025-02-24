import { cookies } from "next/headers";

export async function getSession() {
  try {
    const cookieStore = await cookies();
    const userToken = cookieStore.get("userToken")?.value;
    const res = await fetch(`${process.env.BASE_URL}/api/auth/session`, {
      headers: { Authorization: `Bearer ${userToken}` },
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error);

    return { error: null, user: data.user };
  } catch (error) {
    return { error: error.message, user: null };
  }
}

export async function getAdminSession() {
  try {
    const cookieStore = await cookies();
    const userToken = cookieStore.get("adminToken")?.value;
    const res = await fetch(`${process.env.BASE_URL}/api/auth/admin/session`, {
      headers: { Authorization: `Bearer ${userToken}` },
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error);

    return { error: null, user: data.user };
  } catch (error) {
    return { error: error.message, user: null };
  }
}
