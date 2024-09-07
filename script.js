const vlogPosts = [
    {
        title: "Day 1 Vlog",
        date: "2024-09-01",
        content: "This is the content for Day 1 vlog.",
        videoUrl: "https://www.youtube.com/embed/your-video-id"
    },
    {
        title: "Day 2 Vlog",
        date: "2024-09-02",
        content: "This is the content for Day 2 vlog.",
        videoUrl: "https://www.youtube.com/embed/your-video-id"
    }
];

const vlogContainer = document.getElementById("vlog-posts");

vlogPosts.forEach(vlog => {
    const vlogEntry = document.createElement("div");
    vlogEntry.className = "vlog-entry";

    vlogEntry.innerHTML = `
        <h3>${vlog.title} - ${vlog.date}</h3>
        <p>${vlog.content}</p>
        <iframe width="560" height="315" src="${vlog.videoUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
    vlogContainer.appendChild(vlogEntry);
});
