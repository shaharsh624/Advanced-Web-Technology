import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MyCalendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [scheduledEvents, setScheduledEvents] = useState([
        {
            id: 1,
            date: new Date("2024-05-02"),
            title: "Dribble Meet up",
            timeCal: "6 pm",
            description: "Discuss project updates.",
            img: "https://e7.pngegg.com/pngimages/185/850/png-clipart-task-computer-icons-tasks-s-angle-text-thumbnail.png",
        },
        {
            id: 2,
            date: new Date("2024-05-02"),
            title: "Design Meeting",
            timeCal: "12 pm",
            description: "Lunch with clients.",
            img: "https://e7.pngegg.com/pngimages/185/850/png-clipart-task-computer-icons-tasks-s-angle-text-thumbnail.png",
        },
        {
            id: 3,
            date: new Date("2024-05-03"),
            title: "Annual Conference",
            timeCal: "3 pm",
            description: "Present new product features.",
            img: "https://e7.pngegg.com/pngimages/185/850/png-clipart-task-computer-icons-tasks-s-angle-text-thumbnail.png",
        },
    ]);

    const [newEvent, setNewEvent] = useState({
        title: "",
        date: "",
        timeCal: "",
        description: "",
        img: "",
    });

    const handleDateClick = (date) => {
        setSelectedDate(date);
        setSelectedEvent(null);
    };

    const handleEventClick = (event) => {
        setSelectedEvent(event.id === selectedEvent?.id ? null : event); // Toggle selected event
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEvent({
            ...newEvent,
            [name]: value,
        });
    };

    const handleAddEvent = (e) => {
        e.preventDefault();
        const id = scheduledEvents.length + 1;
        newEvent.date = selectedDate;
        newEvent.img =
            "https://e7.pngegg.com/pngimages/185/850/png-clipart-task-computer-icons-tasks-s-angle-text-thumbnail.png";

        const newEventWithId = {
            ...newEvent,
            id,
            date: new Date(newEvent.date),
        };
        setScheduledEvents([...scheduledEvents, newEventWithId]);
        setNewEvent({
            title: "",
            date: "",
            timeCal: "",
            description: "",
        });
    };

    const eventsForSelectedDate = scheduledEvents.filter(
        (event) => event.date.toDateString() === selectedDate.toDateString()
    );

    return (
        <div>
            <h1>My Calendar</h1>
            <div style={{ display: "flex" }}>
                <div>
                    <Calendar onChange={handleDateClick} value={selectedDate} />
                </div>
                <div className="div2">
                    {eventsForSelectedDate.map((event) => (
                        <div
                            key={event.id}
                            className={`event ${
                                selectedEvent?.id === event.id ? "selected" : ""
                            }`}
                            onClick={() => handleEventClick(event)}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    src={event.img}
                                    alt={event.title}
                                    height="50px"
                                    style={{ marginRight: "10px" }}
                                />
                                <div style={{ margin: "0px 10px" }}>
                                    <h3>{event.title}</h3>
                                    <p>{event.timeCal}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ display: "flex", padding: "20px 0px" }}>
                <div
                    style={{
                        width: "290px",
                        padding: "30px",
                        backgroundColor: "#52596c",
                        color: "#fff",
                    }}
                >
                    <h2>Add New Event</h2>
                    <form onSubmit={handleAddEvent}>
                        <input
                            type="text"
                            name="title"
                            value={newEvent.title}
                            placeholder="Event Title"
                            onChange={handleInputChange}
                            style={{ marginBottom: "10px", width: "100%" }}
                        />
                        <input
                            type="text"
                            name="timeCal"
                            value={newEvent.timeCal}
                            placeholder="Event Time"
                            onChange={handleInputChange}
                            style={{ marginBottom: "10px", width: "100%" }}
                        />
                        <textarea
                            name="description"
                            value={newEvent.description}
                            placeholder="Event Description"
                            onChange={handleInputChange}
                            style={{ marginBottom: "10px", width: "100%" }}
                        />
                        <button type="submit" style={{ width: "100%" }}>
                            Add Event
                        </button>
                    </form>
                </div>

                <div className="event-details">
                    {selectedEvent && (
                        <div
                            style={{
                                width: "300px",
                                height: "210px",
                                padding: "30px",
                                margin: "0px 20px",
                                backgroundColor: "#52596c",
                                color: "#fff",
                            }}
                        >
                            <h2>{selectedEvent.title}</h2>
                            <p>
                                <strong>Description: </strong>
                                {selectedEvent.description}
                            </p>
                            <p>
                                <strong>Date: </strong>
                                {selectedEvent.date.toLocaleDateString()}
                            </p>
                            <p>
                                <strong>Time: </strong>
                                {selectedEvent.timeCal}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MyCalendar;
