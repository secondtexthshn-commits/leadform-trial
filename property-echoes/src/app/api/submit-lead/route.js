import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, location, intent, consent, page_url, lead_source } = body;

    // Validation
    if (!email || !location || !intent || consent === undefined) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save to Firestore
    await addDoc(collection(db, "leads"), {
      email,
      location,
      intent,
      consent,
      page_url: page_url || "",
      lead_source: lead_source || "",
      created_at: serverTimestamp(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
