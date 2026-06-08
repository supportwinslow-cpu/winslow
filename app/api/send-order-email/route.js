import nodemailer from "nodemailer";

export const runtime = "nodejs";

const formatPrice = (amount) => {
  return `₹${Number(amount || 0).toLocaleString("en-IN")}`;
};

const escapeHtml = (value) => {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
};

export async function POST(req) {
  try {
    const {
      orderId,
      customerName,
      customerEmail,
      phone,
      address,
      city,
      state,
      pincode,
      cartItems = [],
      subtotal,
      discount,
      total,
      paymentMethod,
      paymentStatus,
    } = await req.json();

    if (!orderId || !customerEmail) {
      return Response.json(
        {
          success: false,
          message: "Order ID and customer email are required",
        },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return Response.json(
        {
          success: false,
          message: "Email credentials missing in .env.local",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const productRows = cartItems
      .map((item) => {
        const itemName = escapeHtml(item.name);
        const itemQty = Number(item.quantity || 1);
        const itemPrice = Number(item.price || 0);
        const itemTotal = itemPrice * itemQty;

        return `
          <tr>
            <td style="padding:12px;border-bottom:1px solid #eeeeee;color:#111111;font-size:14px;">
              ${itemName}
            </td>
            <td style="padding:12px;border-bottom:1px solid #eeeeee;color:#111111;font-size:14px;text-align:center;">
              ${itemQty}
            </td>
            <td style="padding:12px;border-bottom:1px solid #eeeeee;color:#111111;font-size:14px;text-align:right;font-weight:700;">
              ${itemPrice === 0 ? "FREE" : formatPrice(itemTotal)}
            </td>
          </tr>
        `;
      })
      .join("");

    const html = `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;padding:0;background:#f4f5f7;font-family:Arial,Helvetica,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:24px 12px;">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width:650px;background:#ffffff;border-radius:18px;overflow:hidden;">
                  
                  <tr>
                    <td style="background:#2F2FE4;padding:30px 24px;text-align:center;">
                      <h1 style="margin:0;color:#ffffff;font-size:26px;line-height:1.3;">
                        Order Confirmed
                      </h1>
                      <p style="margin:8px 0 0;color:#ffffff;font-size:14px;">
                        Thank you for shopping with Winslow India
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:26px 24px;">
                      <h2 style="margin:0 0 10px;color:#111111;font-size:20px;">
                        Hi ${escapeHtml(customerName || "Customer")},
                      </h2>

                      <p style="margin:0 0 20px;color:#444444;font-size:15px;line-height:1.6;">
                        Your order has been placed successfully. We have received your order and will process it soon.
                      </p>

                      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f8ff;border:1px solid #e1e4ff;border-radius:12px;margin-bottom:24px;">
                        <tr>
                          <td style="padding:16px;">
                            <p style="margin:0 0 8px;color:#111111;font-size:15px;">
                              <strong>Order ID:</strong> ${escapeHtml(orderId)}
                            </p>
                            <p style="margin:0 0 8px;color:#111111;font-size:15px;">
                              <strong>Payment Method:</strong> ${escapeHtml(paymentMethod)}
                            </p>
                            <p style="margin:0;color:#111111;font-size:15px;">
                              <strong>Payment Status:</strong> ${escapeHtml(paymentStatus)}
                            </p>
                          </td>
                        </tr>
                      </table>

                      <h3 style="margin:0 0 12px;color:#111111;font-size:18px;">
                        Order Summary
                      </h3>

                      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:20px;">
                        <thead>
                          <tr style="background:#f5f5f5;">
                            <th style="padding:12px;text-align:left;font-size:13px;color:#111111;">
                              Product
                            </th>
                            <th style="padding:12px;text-align:center;font-size:13px;color:#111111;">
                              Qty
                            </th>
                            <th style="padding:12px;text-align:right;font-size:13px;color:#111111;">
                              Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          ${productRows}
                        </tbody>
                      </table>

                      <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #eeeeee;padding-top:14px;margin-bottom:24px;">
                        <tr>
                          <td style="padding:6px 0;color:#333333;font-size:15px;">
                            Subtotal
                          </td>
                          <td style="padding:6px 0;color:#111111;font-size:15px;text-align:right;font-weight:700;">
                            ${formatPrice(subtotal)}
                          </td>
                        </tr>

                        <tr>
                          <td style="padding:6px 0;color:#16a34a;font-size:15px;">
                            Discount
                          </td>
                          <td style="padding:6px 0;color:#16a34a;font-size:15px;text-align:right;font-weight:700;">
                            - ${formatPrice(discount)}
                          </td>
                        </tr>

                        <tr>
                          <td style="padding:6px 0;color:#333333;font-size:15px;">
                            Shipping
                          </td>
                          <td style="padding:6px 0;color:#111111;font-size:15px;text-align:right;font-weight:700;">
                            Free
                          </td>
                        </tr>

                        <tr>
                          <td style="padding:12px 0 0;color:#111111;font-size:18px;font-weight:700;">
                            Total
                          </td>
                          <td style="padding:12px 0 0;color:#111111;font-size:18px;text-align:right;font-weight:700;">
                            ${formatPrice(total)}
                          </td>
                        </tr>
                      </table>

                      <h3 style="margin:0 0 12px;color:#111111;font-size:18px;">
                        Delivery Details
                      </h3>

                      <table width="100%" cellpadding="0" cellspacing="0" style="background:#fafafa;border-radius:12px;margin-bottom:24px;">
                        <tr>
                          <td style="padding:16px;">
                            <p style="margin:0 0 8px;color:#333333;font-size:14px;">
                              <strong>Name:</strong> ${escapeHtml(customerName)}
                            </p>
                            <p style="margin:0 0 8px;color:#333333;font-size:14px;">
                              <strong>Phone:</strong> ${escapeHtml(phone)}
                            </p>
                            <p style="margin:0;color:#333333;font-size:14px;line-height:1.6;">
                              <strong>Address:</strong> 
                              ${escapeHtml(address)}, 
                              ${escapeHtml(city)}, 
                              ${escapeHtml(state)} - 
                              ${escapeHtml(pincode)}
                            </p>
                          </td>
                        </tr>
                      </table>

                      <p style="margin:0;color:#555555;font-size:14px;line-height:1.6;">
                        We will contact you soon with shipping updates.
                      </p>

                      <p style="margin:22px 0 0;color:#111111;font-size:15px;line-height:1.6;">
                        Regards,<br />
                        <strong>Winslow India</strong>
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="background:#111111;padding:18px 24px;text-align:center;">
                      <p style="margin:0;color:#ffffff;font-size:13px;">
                        Winslow India • Premium Car Accessories
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: customerEmail,
      subject: `Order Confirmed - ${orderId}`,
      html,
    });

    return Response.json({
      success: true,
      message: "Order email sent successfully",
    });
  } catch (error) {
    console.log("EMAIL_SEND_ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Email send failed",
      },
      { status: 500 }
    );
  }
}