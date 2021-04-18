# kb-work-day-scheduler
5. Third-Party APIs Challenge: Work Day Scheduler

https://github.com/katiebbugs/kb-work-day-scheduler

https://katiebbugs.github.io/kb-work-day-scheduler/

On-the-Job Ticket:

    User Story
        AS AN employee with a busy schedule
        I WANT to add important events to a daily planner
        SO THAT I can manage my time effectively

    Acceptance Criteria
        GIVEN I am using a daily planner to create a schedule
        WHEN I open the planner
        THEN the current day is displayed at the top of the calendar
        WHEN I scroll down
        THEN I am presented with time blocks for standard business hours
        WHEN I view the time blocks for that day
        THEN each time block is color-coded to indicate whether it is in the past, present, or future
        WHEN I click into a time block
        THEN I can enter an event
        WHEN I click the save button for that time block
        THEN the text for that event is saved in local storage
        WHEN I refresh the page
        THEN the saved events persist

Edits Made:

    HTML and CSS
        ORGANIZED starter HTML and CSS code and added notes
        CREATED time blocks in HTML for 9 AM - 5 PM, using class names found in starter CSS code

    JavaScript
        CREATED a function to run when the page has loaded the HTML and CSS code
        CREATED a code to to use Luxon API to display the current day
        CREATED function to log user input, that's put in each time block and saved, into local storage
        CREATED code to grab what was put into local storage and display it
        CREATED function to check and compare the time block time with the current time, so it will change CSS class/color based on the time (past-gray, present-red, future-green)

Image of completed site:
