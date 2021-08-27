const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data =>displayBuddies(data))
}
loadBuddies()
const displayBuddies = data => {
    const buddies = data.results;
    const buddiesBox = document.getElementById('buddies')
    for (const buddy of buddies) {
        console.log(data);
        const p = document.createElement('p')
        p.innerText = `email:${buddy.email} name : ${buddy.name.first} ${buddy.name.last} `
        buddiesBox.appendChild(p);
        
    }
}