const CONTACTS = {
  general: "",
  blanc: "",
  panzo: "",
  wawashy: "",
  laffa: "",
  kids: "",
  events: ""
};

function openWhatsApp(key, message) {
  const number = CONTACTS[key];

  if (!number) {
    alert("رقم واتساب " + key + " لسه ما اتضافش.");
    return false;
  }

  const clean = number.replace(/\D/g, "");

  window.open(
    "https://wa.me/" + clean + "?text=" + encodeURIComponent(message),
    "_blank"
  );

  return false;
}

document.querySelectorAll("[data-wa]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    const key = el.dataset.wa;

    const labels = {
      blanc: "بلانش في 44",
      panzo: "بانزو في 44",
      wawashy: "وواشي في 44",
      laffa: "لفة وسيخ في 44",
      kids: "Kids Area في 44",
      general: "44",
      events: "44 Events"
    };

    openWhatsApp(
      key,
      "مرحبًا، أريد الاستفسار عن " + labels[key] + "."
    );
  });
});

function submitEvent(e) {
  e.preventDefault();

  const d = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    type: document.getElementById("eventType").value,
    guests: document.getElementById("guests").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    notes: document.getElementById("notes").value
  };

  const message =
    "مرحبًا، أريد الاستفسار عن 44 Events.%0A" +
    "الاسم: " + encodeURIComponent(d.name) + "%0A" +
    "واتساب: " + encodeURIComponent(d.phone) + "%0A" +
    "المناسبة: " + encodeURIComponent(d.type) + "%0A" +
    "الضيوف: " + encodeURIComponent(d.guests || "-") + "%0A" +
    "التاريخ: " + encodeURIComponent(d.date || "-") + "%0A" +
    "الوقت: " + encodeURIComponent(d.time || "-") + "%0A" +
    "ملاحظات: " + encodeURIComponent(d.notes || "-");

  const number = CONTACTS.events || CONTACTS.general;

  if (!number) {
    alert("رقم واتساب الخاص بالـ Events لسه ما اتضافش.");
    return false;
  }

  window.open(
    "https://wa.me/" + number.replace(/\D/g, "") + "?text=" + message,
    "_blank"
  );

  return false;
}
