document.addEventListener("DOMContentLoaded", () => {
  // Navbar counters
  const heartCountEl = document.getElementById("heart-count");
  const balanceEl = document.getElementById("balance");
  const copyCountEl = document.getElementById("copy-count");

  // Call history elements
  const historyCard = document.getElementById("call-history");
  const clearBtn = historyCard.querySelector("button");
  let historyList = document.createElement("div");
  historyList.className = "flex flex-col gap-2 overflow-y-auto mt-2";
  historyCard.appendChild(historyList);

  // State
  let heartCount = 0;
  let balance = parseInt(balanceEl.textContent, 10) || 0;
  let copyCount = 0;

  // clipboard 
  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {
        fallback(text);
      });
    } else {
      fallback(text);
    }

    function fallback(txt) {
      const ta = document.createElement("textarea");
      ta.value = txt;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        alert("Copy not supported in this browser.");
      }
      document.body.removeChild(ta);
    }
  }

  // click handle
  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    // CLEAR HISTORY
    if (btn === clearBtn) {
      historyList.innerHTML = "";
      return;
    }

    // Detect parent card
    const card = btn.closest(".rounded-lg.bg-white");
    if (!card || card.id === "call-history") return;

    const serviceName = card.querySelector("h1")?.textContent.trim();
    const serviceNumber = card.querySelector("h3")?.textContent.trim();

    // HEART BUTTON
    if (btn.querySelector("i.fa-heart")) {
      const icon = btn.querySelector("i.fa-heart");
      icon.classList.toggle("fa-regular");
      icon.classList.toggle("fa-solid");
      icon.classList.toggle("text-red-500");

      heartCount++;
      heartCountEl.textContent = heartCount;
      return;
    }

    // COPY BUTTON
    if (btn.querySelector("i.fa-copy") || btn.textContent.includes("Copy")) {
      copyToClipboard(serviceNumber);
      alert(`${serviceNumber} copied to clipboard`);
      copyCount++;
      copyCountEl.textContent = copyCount;
      return;
    }

    // CALL BUTTON
    if (btn.querySelector("i.fa-phone") || btn.textContent.includes("Call")) {
      if (balance < 20) {
        alert("Not enough coins to make a call!");
        return;
      }
      balance -= 20;
      balanceEl.textContent = balance;

      alert(`Calling ${serviceName} at ${serviceNumber}`);

      const now = new Date();
      const timeStr = now.toLocaleTimeString();

      const entry = document.createElement("div");
      entry.className =
        "rounded-[8px] p-4 flex justify-between items-center bg-[rgba(250,250,250,1)]";
      entry.innerHTML = `
        <div>
          <h3 class="inter text-[18px] font-semibold">${serviceName}</h3>
          <p class="hind-madurai-regular text-[18px] text-[#5C5C5C]">${serviceNumber}</p>
        </div>
        <p class="hind-madurai-regular text-[18px]">${timeStr}</p>
      `;
      historyList.prepend(entry);
      return;
    }
  });
});
