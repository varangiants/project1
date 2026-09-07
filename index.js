Orders.forEach((Order) => {
  const tr = document.createElement("tr");
  const trContent = `
    <td>${Order.productName}</td>
    <td>${Order.productNumber}</td>
    <td>${Order.paymentStatus}</td>
    <td class="${
      Order.status === "Declined"
        ? "danger"
        : Order.status === "Pending"
          ? "warning"
          : "primary"
    }">${Order.status}</td>
        <td class="primary">Details</td>
    `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
