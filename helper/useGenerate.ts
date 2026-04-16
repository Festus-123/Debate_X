export const generateDebateImage = async ({
  name,
  side,
  argument,
}: {
  name: string;
  side: "support" | "oppose" | "neutral";
  argument: string;
}) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) return;

  canvas.width = 1080;
  canvas.height = 1080;

  // Background
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const sideColor = side === "support" ? "#facc15"  : side === "oppose" ? "#ef4444" : "#8b5cf6";
  const tag = side === "support" ? "SUPPORT" : side === "oppose"? "OPPOSE" : "NEUTRAL";

  // Profile
  ctx.beginPath();
  ctx.arc(120, 120, 50, 0, Math.PI * 2);
  ctx.fillStyle = "#ddd";
  ctx.fill();
  ctx.closePath();

  // Name
  ctx.fillStyle = "#111";
  ctx.font = "bold 40px Arial";
  ctx.fillText(name, 200, 110);

  // Badge
  ctx.fillStyle = sideColor;
  ctx.fillRect(200, 130, 160, 50);

  ctx.fillStyle = "#000";
  ctx.font = "bold 24px Arial";
  ctx.fillText(tag, 220, 165);

  ctx.fillStyle = "#666";
  ctx.font = "20px Arial";
  ctx.fillText("DebateX", 380, 165);

  // Text wrap
  ctx.fillStyle = "#111";
  ctx.font = "32px Arial";

  const maxWidth = 900;
  const lineHeight = 50;

  const words = argument.split(" ");
  let line = "";
  let y = 300;

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + " ";
    const metrics = ctx.measureText(testLine);

    if (metrics.width > maxWidth) {
      ctx.fillText(line, 100, y);
      line = words[i] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }

  ctx.fillText(line, 100, y);

  // Watermark
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.font = "bold 120px Arial";
  ctx.fillText("DebateX", 300, 600);

  // =====================
  // 🔥 NEW: Convert to Blob
  // =====================
  const blob: Blob | null = await new Promise((resolve) =>
    canvas.toBlob(resolve, "image/png")
  );

  if (!blob) return;

  // =====================
  // 🔥 COPY TO CLIPBOARD
  // =====================
  try {
    await navigator.clipboard.write([
      new ClipboardItem({ "image/png": blob }),
    ]);
    console.log("Image copied to clipboard ✅");
  } catch (err) {
    console.error("Clipboard failed ❌", err);
  }

  // Still return base64 (for preview/download if needed)
  return canvas.toDataURL("image/png");
};