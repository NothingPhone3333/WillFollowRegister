// Load existing data from local storage
let willFollowItems = JSON.parse(localStorage.getItem('willFollowItems')) || [];

function addWillFollow() {
    const officeName = document.getElementById("officeName").value;
    const followContent = document.getElementById("followContent").value;
    const dated = document.getElementById("dated").value;

    // Create a new item
    const newItem = {
        officeName,
        followContent,
        dated,
        received: false
    };

    // Add the item to the list
    willFollowItems.push(newItem);

    // Save the updated list to local storage
    localStorage.setItem('willFollowItems', JSON.stringify(willFollowItems));

    // Display the list
    displayWillFollowList();
}

function settleItem(index) {
    // Mark the item as received
    willFollowItems[index].received = true;

    // Save the updated list to local storage
    localStorage.setItem('willFollowItems', JSON.stringify(willFollowItems));

    // Display the updated list
    displayWillFollowList();
}

function displayWillFollowList() {
    const listContainer = document.getElementById("willFollowList");

    // Clear the existing content
    listContainer.innerHTML = "";

    // Display each item in the list
    willFollowItems.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.className = "willFollowItem";
        itemElement.innerHTML = `
            <p><strong>Office Name:</strong> ${item.officeName}</p>
            <p><strong>Will Follow Content:</strong> ${item.followContent}</p>
            <p><strong>Dated:</strong> ${item.dated}</p>
            ${item.received ? '<p style="color: green;">Received</p>' : '<button onclick="settleItem(' + index + ')">Settle</button>'}
            <hr>
        `;
        listContainer.appendChild(itemElement);
    });
}

// Display the initial list on page load
displayWillFollowList();
