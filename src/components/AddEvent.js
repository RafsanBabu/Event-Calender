import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Link } from 'react-router-dom';
import './style.css'
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

/*const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];*/




function AddEvent(){
    

    const dispatch = useDispatch();
    const events = useSelector((state)=>state);
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent(e) {
        e.preventDefault();
        setAllEvents([...allEvents, newEvent]);


        const data= {
            newEvent
        }
        dispatch({type: "ADD_EVENT",payload:data});

    }


    return(
    <div className="App">
                <h3>Add New Event</h3>
        <div className="container">
            <div className="row">
                <form>
                <div className="form-group">
                    <label for="email">Event Name:</label>
                    <input type="text" placeholder="Add Event" onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                </div>
                <div className="form-group">
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                
                </div>
                <div className="form-group">
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                </div>
                <div className="form-group">
                    <label for="email">Add Guest:</label>
                    <input type="text" placeholder="Add Guest"/>
                </div>
                <div className="form-group">
                    <label for="email">Add Video Meet URL:</label>
                    <Link to="https://meet.google.com/">Google Meet</Link>
                </div>
                <div className="form-group">
                    <label for="email">Location:</label>
                    <input type="text" placeholder="Add Location"/>
                </div>
                <div className="form-group">
                    <label for="email">Event Description:</label>
                    <input type="text" placeholder="Event Description" />
                </div>
                <button type="submit" class="btn btn-primary" onClick={handleAddEvent}>Submit</button>
                </form>
                                               
            </div>            
        </div> 

        <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />



    </div>
    )
}
export default AddEvent;