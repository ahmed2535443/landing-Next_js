import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createAdminClient } from "@/utils/supabase/admin";

export async function POST(req: Request) {
  try {
    // #region agent log
    fetch('http://127.0.0.1:7420/ingest/b46812cf-7fb3-4880-bfd3-99921dbc8b61',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'af4353'},body:JSON.stringify({sessionId:'af4353',runId:'pre-fix',hypothesisId:'B',location:'app/api/contact/route.ts:POST-entry',message:'POST handler started',data:{hasSupabaseUrl:!!process.env.NEXT_PUBLIC_SUPABASE_URL,hasSupabaseKey:!!process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,hasServiceRoleKey:!!process.env.SUPABASE_SERVICE_ROLE_KEY,hasGmailUser:!!process.env.GMAIL_USER,hasGmailPass:!!process.env.GMAIL_APP_PASSWORD},timestamp:Date.now()})}).catch(()=>{});
    // #endregion

    // استقبال البيانات القادمة من الفورم
    const { name, email, phone, message } = await req.json();

    // التحقق من البيانات المطلوبة
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "الاسم والبريد الإلكتروني والرسالة مطلوبين",
        },
        {
          status: 400,
        }
      );
    }

    // إنشاء اتصال مع Supabase (admin — يتجاوز RLS من السيرفر)
    let supabase;
    try {
      supabase = createAdminClient();
      // #region agent log
      fetch('http://127.0.0.1:7420/ingest/b46812cf-7fb3-4880-bfd3-99921dbc8b61',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'af4353'},body:JSON.stringify({sessionId:'af4353',runId:'pre-fix',hypothesisId:'A',location:'app/api/contact/route.ts:createClient',message:'createClient succeeded',data:{supabaseType:typeof supabase,hasFrom:typeof supabase?.from==='function'},timestamp:Date.now()})}).catch(()=>{});
      // #endregion
    } catch (clientErr) {
      // #region agent log
      fetch('http://127.0.0.1:7420/ingest/b46812cf-7fb3-4880-bfd3-99921dbc8b61',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'af4353'},body:JSON.stringify({sessionId:'af4353',runId:'pre-fix',hypothesisId:'A',location:'app/api/contact/route.ts:createClient-error',message:'createClient failed',data:{error:String(clientErr)},timestamp:Date.now()})}).catch(()=>{});
      // #endregion
      throw clientErr;
    }

    // حفظ البيانات داخل قاعدة البيانات
    const { error } = await supabase
      .from("contact_requests")
      .insert([
        {
          name,
          email,
          phone,
          message,
        },
      ]);

    // #region agent log
    fetch('http://127.0.0.1:7420/ingest/b46812cf-7fb3-4880-bfd3-99921dbc8b61',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'af4353'},body:JSON.stringify({sessionId:'af4353',runId:'pre-fix',hypothesisId:'C-D',location:'app/api/contact/route.ts:supabase-insert',message:'Supabase insert result',data:{hasError:!!error,errorCode:error?.code,errorMessage:error?.message,errorDetails:error?.details,errorHint:error?.hint},timestamp:Date.now()})}).catch(()=>{});
    // #endregion

    if (error) {
      console.error("Supabase Error:", error);

      return NextResponse.json(
        {
          error: "فشل حفظ البيانات",
        },
        {
          status: 500,
        }
      );
    }

    // إعداد Gmail
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // إرسال الإيميل (اختياري — لا يؤثر على نجاح حفظ البيانات)
    // #region agent log
    fetch('http://127.0.0.1:7420/ingest/b46812cf-7fb3-4880-bfd3-99921dbc8b61',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'af4353'},body:JSON.stringify({sessionId:'af4353',runId:'post-fix',hypothesisId:'E',location:'app/api/contact/route.ts:before-email',message:'Supabase OK, attempting email',data:{},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
    try {
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.TO_EMAIL || process.env.GMAIL_USER,

        subject: `رسالة جديدة من ${name}`,

        html: `
        <h2>رسالة جديدة من الموقع</h2>

        <p><strong>الاسم:</strong> ${name}</p>

        <p><strong>البريد الإلكتروني:</strong> ${email}</p>

        <p><strong>رقم الهاتف:</strong> ${phone || "لا يوجد"}</p>

        <p><strong>الرسالة:</strong></p>

        <p>${message}</p>
      `,
      });
      // #region agent log
      fetch('http://127.0.0.1:7420/ingest/b46812cf-7fb3-4880-bfd3-99921dbc8b61',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'af4353'},body:JSON.stringify({sessionId:'af4353',runId:'post-fix',hypothesisId:'E',location:'app/api/contact/route.ts:email-success',message:'Email sent successfully',data:{},timestamp:Date.now()})}).catch(()=>{});
      // #endregion
    } catch (emailErr) {
      console.error("Email Error:", emailErr);
      // #region agent log
      fetch('http://127.0.0.1:7420/ingest/b46812cf-7fb3-4880-bfd3-99921dbc8b61',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'af4353'},body:JSON.stringify({sessionId:'af4353',runId:'post-fix',hypothesisId:'E',location:'app/api/contact/route.ts:email-error',message:'Email failed but Supabase saved',data:{error:String(emailErr)},timestamp:Date.now()})}).catch(()=>{});
      // #endregion
    }

    // #region agent log
    fetch('http://127.0.0.1:7420/ingest/b46812cf-7fb3-4880-bfd3-99921dbc8b61',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'af4353'},body:JSON.stringify({sessionId:'af4353',runId:'post-fix',hypothesisId:'E',location:'app/api/contact/route.ts:success',message:'Request succeeded after Supabase save',data:{},timestamp:Date.now()})}).catch(()=>{});
    // #endregion

    return NextResponse.json({
      success: true,
      message: "تم إرسال الرسالة بنجاح",
    });
  } catch (error) {
    // #region agent log
    fetch('http://127.0.0.1:7420/ingest/b46812cf-7fb3-4880-bfd3-99921dbc8b61',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'af4353'},body:JSON.stringify({sessionId:'af4353',runId:'pre-fix',hypothesisId:'A-E',location:'app/api/contact/route.ts:catch',message:'Unhandled error in POST',data:{error:String(error)},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
    console.error(error);

    return NextResponse.json(
      {
        error: "حدث خطأ أثناء إرسال الرسالة",
      },
      {
        status: 500,
      }
    );
  }
}