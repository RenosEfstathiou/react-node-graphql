async function main() {
  const res = await fetch("http://localhost:9000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query: "query {greeting}",
    }),
  });

  const { data } = await res.json();

  return data.greeting;
}

main().then((res) => {
  document.getElementById("greeting").textContent = res;
});
