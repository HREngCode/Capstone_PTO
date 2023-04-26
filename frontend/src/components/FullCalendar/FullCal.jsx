//General Imports
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";

//Component Imports
// import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

//Utility Imports
import { createEventId } from './event-utils'
import { Calendar } from '@fullcalendar/core';

const FullCal = (props)=> {

  const navigate = useNavigate();
  const [weekendsVisible, setWeekendsVisible] = useState(true)
  const [currentEvents, setCurrentEvents] = useState([])
  // const [numberEvents, setNumberEvents] = useState(0)

  useEffect(() => {
    console.log("I Only run once (When the component gets mounted)") 
    handleEvents()
  },[props.ptoRequests]);

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible)
    console.log(weekendsVisible)
  }
    
  // const handleDateSelect = (selectInfo) => {
  //   let title = prompt('Please enter a new title for your event')
  //   let calendarApi = selectInfo.view.calendar

  //   calendarApi.unselect() // clear date selection

  //   if (title) {
  //     calendarApi.addEvent({
  //       id: createEventId(),
  //       title,
  //       start: selectInfo.startStr,
  //       end: selectInfo.endStr,
  //       allDay: selectInfo.allDay
  //     })
  //   }
  // }

  const handleEventClick = (eventInfo) => {
    // Access the custom event ID from the event object
    const eventId = eventInfo.event.extendedProps.requestid;
    navigate(`/timeoffrequest/${eventId}`);
    // Do something with the event ID
    console.log('Event ID:', eventId);
  };

  function handleEvents(){
    let events = props.ptoRequests.map(function (event){
      return {
        title: event.employee.employee_first_name,
        department: event.employee.department,
        start: event.date_requested,
        end: event.date_requested,
        requestid: event.id,
        }
      }
    )
    setCurrentEvents(events)
  }
  
  return (
    <div className='demo-app'>
      <div className='demo-app-sidebar-section'>
        <label>
          <input
            type='checkbox'
            checked={weekendsVisible}
            onChange={handleWeekendsToggle}
          >
          </input>
          Show Weekends
        </label>
      </div>
      <div className='demo-app-main'>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          events={currentEvents}
          // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          // select={handleDateSelect}
          // eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
        />
      </div>
    </div>
  )

}
export default FullCal

