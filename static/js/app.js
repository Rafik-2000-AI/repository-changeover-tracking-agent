// Equipment Selection Logic
const equipmentOptions = [
    { id: 1, name: 'Excavator' },
    { id: 2, name: 'Bulldozer' },
    { id: 3, name: 'Crane' }
];

function selectEquipment(equipmentId) {
    const selectedEquipment = equipmentOptions.find(eq => eq.id === equipmentId);
    if (selectedEquipment) {
        console.log(`Selected Equipment: ${selectedEquipment.name}`);
    } else {
        console.error('Invalid Equipment ID');
    }
}

// Session Management Logic
let sessionData = {};

function startSession(userId) {
    sessionData.userId = userId;
    sessionData.startTime = new Date();
    console.log(`Session started for User: ${userId}`);
}

function endSession() {
    console.log(`Session ended for User: ${sessionData.userId}`);
    sessionData = {};
}

// API Calls Logic
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Fetch data error:', error);
    }
}

async function submitChangeoverData(data) {
    const url = 'https://api.example.com/changeover'; // Replace with actual API endpoint
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Submit data error:', error);
    }
}

// Example usage
startSession('User123');
selectEquipment(1);
const data = { equipmentId: 1, changeoverTime: new Date() };
submitChangeoverData(data);