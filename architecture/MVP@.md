# MVP@ (Model View Presenter Attendant)

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2026-01-04<br/>
<strong>Edited:</strong> 2026-01-04<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.3.101<br/>
<strong>Copywrite 2020-2026 Adligo Inc</strong>
</div>

Model View Presenter Attendant is designed for all modern execution environments, including command line programs, desktop programs, mobile programs, servers, and client web applications.  It was designed to improve on the ability to separate concerns, provide greater clarity over other design patterns.  In addition, I am looking to focus the flow of application execution into tight (small easy-to-manage) circles or preferably [DAGs#1.3.6.1.4.1.33097.1.0.16](../data_structures/abstract/DirectedAcyclicGraphs.md). 

# Summary of Terms

## Model 

The word Model in the MVP@ acronym represents the entire memory model of an application.  This can include events (and their associated data), data that is in memory that represents information from databases, and anything in RAM that doesn't fall into one of the other MVP@ term groups. 

## View

The word View in the MVP@ acronym represents the entire view displayed to the user.  The View can often be broken down into windows (aka frames and dialogs), tabs, pages, panels and components.  Views and their respective parts also are responsible for sending events to Presenters when the user presses buttons and performs other interactions.  

#### Browser Applications

In browser applications, tabs are generally displayed in windows which display HTML pages.  Since the

#### Command line Applications

In command line applications (which don't open GUI windows), the view is simply the text in the terminal.  

#### Desktop GUI & Mobile Applications

In traditional desktop and mobile applications windows are the top-level part of the view that is displayed to the user.  These are then populated with panels  

## Presenter

The word Presenter the MVP@ acronym represents the tree of presenters which interact with the View of the application.  The presenters take on the responsibility for altering the view, handling events, delegating to attendants and managing subordinate presenters.  To provide a clear separation of concerns, they are not aware of their supervising presenter.

## Attendant

The word Attendant in the MVP@ acronym represents the tree of attendants which interact with the presenters and adjacent attendants in the application.  The main responsibility of attendants includes management of in memory caches, interaction with external systems (i.e.; databases, filesystems, local storage, etc.) and internal system signaling up and down the attendant tree.

# Flow Overviews

Note: In all of these diagrams the models are simply represented as 'data'.  In addition, they are often passed during 'decorate', 'dialog' and 'notify' segments.

## Browser MVP@ Flow Overview

  Note the browser starts in the view, due to the nature of HTML loading before JavaScript execution begins.

```
View          Presenters        Attendants         Cache           Server 
 | ---start----------------------> |                 |                 |
 |               | <--- create --- |                 |                 |
 | <- decorate - |                 |                 |                 |
 | --- notify -> |                 |                 |                 |
 | <- decorate - |                 |                 |                 |
 | --- notify -> |                 |                 |                 |
 |               | --- getData --> |                 |                 |
 |               |                 | -- checkData -> |                 |
 |               |                 | -- retreiveData ----------------> |
 |               | <--- setData -- |
 | <- decorate-- |  
```

## Command Line MVP@ Flow Overview

These could also have caches and get and send data to servers.

```
Attendants    Presenters             View            File System
 | --- create --->|                    |                  |
 |                | --- decorate ----> |                  |    
 | --- dialog --->|                    |                  | 
 |                | --- decorate ----> |                  |    
 |                | - readInputData -> |                  |    
 | <- provide --- |                    |                  |  
 | --- readFileData ------------------------------------> |
 | --- inform --> |                    | 
 |                | --- decorate ----> |              
```

## Desktop GUI, Mobile Application and Server MVP@ Flow Overview 

These could also have caches and get and send data to file systems.  Servers would likely be getting data from databases.

```
Attendants    Presenters             View              Server
 | --- create --->|                    |                  |
 |                | --- decorate ----> |                  |    
 | --- dialog --->|                    |                  | 
 |                | --- decorate ----> |                  |    
 |                | - readInputData -> |                  |    
 | <- provide --- |                    |                  |  
 | --- getData -----------------------------------------> |
 | --- inform --> |                    | 
 |                | --- decorate ----> |              
```

# Term Details

----------------------TODO below this section---------------------------
## Model Details

In MVP@ all kinds of models are usable. However, [Matrix Memory Modeling#1.3.6.1.4.1.33097.3.95](MMM.md) is the recommended approach.

## View Details

### The UI (User Interface) View, Panels, and Components

The View is a generalization for the visual presentation of the data.  It is generally broken down into panels (2d sections of the display), and panels are then broken down into components.  The [User Interface#1.3.6.1.4.1.33097.3.33.0](Interfaces.md#software-interfaces) is the narrowest software interface that will allow interaction between the Attendants and the and the View (Panel or Component).  It often provides methods like setEventListener or setData (i.e., setPerson).

### Active Views (Panels and Components)

Active Views (Panels or Components) can take any form, including using the reactive [Model View View Model Architectural Design Pattern#1.3.6.1.4.1.33097.3.98](MVVM.md) internally with in the View, Panel, or Component.

### Passive Views (Panels and Components)

Passive Views (Panels or Components) are simply views without any rich interaction logic attached, similar to a Book or Newspaper.

## View Attendant Binding

The MVP@ design pattern has a few binding styles

### Attendant Driven Binding

Desktop and Command Line Applications are driven by the Attendants, since they create and manipulate the Views, Panels and UI Components. Since MV@ is largely inspired by [Model View Presenter#1.3.6.1.4.1.33097.3.97](MVP.md) we have historically used a View Factory pattern to create and bind the views to the Attendant using the User Interface.  For example, the  [User Interface#1.3.6.1.4.1.33097.3.33](Interfaces.md) specifically I_OkCancelDialog is driven by the Attendant in the example below;

```
ViewFactory viewFactory = ctx.getViewFactory();
// get or create a I_OkCancelDialog.class
I_OkCancelDialog okCancelDialog = viewFactory.obtain(I_OkCancelDialog.class);
okCancelDialog.show("Are you sure you want to delete this file?");

if (okCancelDialog.isOk()) {
  //delete some file
  okCancelDialog.hide();
}
```

### View Driven Binding

Modern in browser JavaScript applications leveraging reactive style frameworks like [React.js](https://react.dev/) and [Svelt.js](https://svelte.dev/) are driven by the view.  

TODO working through examples for this


## Presenter Details


## Attendant Details

Attendants attend to the user's instructions and wishes.  They are most similar to the Presenters in [MVP#1.3.6.1.4.1.33097.3.97](MVP.md), however, they are compatible with both passive and active views.  In addition, they rely only on [Passive Models#1.3.6.1.4.1.33097.3.32](PM.md) and prefer [Matrix Memory Models#1.3.6.1.4.1.33097.3.95](MMM.md).

The main purpose of the Attendants is to communicate with external systems (e.g., databases, web services, local storage, etc.).  In addition, they may also communicate with the other attendants in the system.  

Attendants are also responsible for managing subordinate Attendants.

## Main Attendant Entry

The Main (aka Supervising) Attendant generally starts the execution flow of the program.  However, in modern JavaScript web applications the HTML page (part of the View) will get loaded first, start the JavaScript runtime, and then start the Main Attendant.   

follows the following linear structure;







### Notes

Renamed the acronym to MV@ to distinguish it from the [Model View Adaptor#1.3.6.1.4.1.33097.3.94](MVA.md) pattern, which I discovered today (2026-01-06).

This was renamed to MVP@ from MVPA to simplify taxonomy in searches from this organization;
[https://www.MVPA.org/](https://www.MVPA.org/)

## Citations

[Model View View Model#1.3.6.1.4.1.33097.3.98](MVVM.md)