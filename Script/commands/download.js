import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

// 🚀 ডাউনলোড হ্যান্ডলার
app.post("/download", async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: "No URL provided" });

    let apiUrl = "";
    if (url.includes("tiktok.com")) {
      apiUrl = `https://YOUR_API_ENDPOINT/tiktok?url=${encodeURIComponent(url)}`;
    } else if (url.includes("instagram.com")) {
      apiUrl = `https://YOUR_API_ENDPOINT/instagram?url=${encodeURIComponent(url)}`;
    } else if (url.includes("facebook.com")) {
      apiUrl = `https://YOUR_API_ENDPOINT/facebook?url=${encodeURIComponent(url)}`;
    } else {
      return res.status(400).json({ error: "Unsupported URL" });
    }

    // 🔗 থার্ড-পার্টি API কল করা
    const response = await fetch(apiUrl);
    const data = await response.json();

    return res.json({
      status: "success",
      videoUrl: data.video || data.download_url || null,
      info: data
    });
  } catch (error) {
    console.error("Download error:", error.message);
    return res.status(500).json({ error: "Server error" });
  }
});

// 🟢 সার্ভার রান
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
