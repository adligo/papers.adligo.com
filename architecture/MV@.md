# MV@ (Model View Attendant)

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2026-01-04<br/>
<strong>Edited:</strong> 2026-01-04<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.3.100<br/>
<strong>Copywrite 2020-2026 Adligo Inc</strong>
</div>

Model View Attendant is designed for all modern execution environments, including command line programs, desktop programs, mobile programs, servers, and client web applications. 

## Attendants

Attendants attend to the user's instructions and wishes.  They are most similar to the Presenters in [MVP#1.3.6.1.4.1.33097.3.97](MVP.md), however, they are compatible with both passive and active views.  In addition, they rely only on [Passive Models#1.3.6.1.4.1.33097.3.32](PM.md) and prefer [Matrix Memory Models#1.3.6.1.4.1.33097.3.95](MMM.md).

The main purpose of the Attendants is to communicate with external systems (e.g., databases, web services, local storage, etc.).  In addition, they may also communicate with the other attendants in the system.  

Attendants are also responsible for managing subordinate Attendants.

## Main Attendant Entry

The Main (aka Supervising) Attendant generally starts the execution flow of the program.  However, in modern JavaScript web applications the HTML page (part of the View) will get loaded first, start the JavaScript runtime, and then start the Main Attendant.   

follows the following linear structure;

```
Main Attendant                        Main View              Storage or Service
    | ----------------may load models ------------------------------> |
    |-------- with models, diplays ----> |                            |
    |                                    |                            |
    |-------- listens for events ------> |                            |
    | <------ receives events -----------|                            |
    | ----------------may store or load models ---------------------> |
    |                                    |
    | ------------------|                | 
    |       may call model methods       |
    | <-----------------|                |
    | -------with models, updates------->|
```

## The UI (User Interface) View, Panels, and Components

The View is a generalization for the visual presentation of the data.  It is generally broken down into panels (2d sections of the display), and panels are then broken down into components.  The [User Interface#1.3.6.1.4.1.33097.3.33.0](Interfaces.md#software-interfaces) is the narrowest software interface that will allow interaction between the Attendants and the and the View (Panel or Component).  It often provides methods like setEventListener or setData (i.e., setPerson).

### Active Views (Panels and Components)

Active Views (Panels or Components) can take any form, including using the reactive [Model View View Model Architectural Design Pattern#1.3.6.1.4.1.33097.3.98](MVVM.md) internally with in the View, Panel, or Component.  

### Passive Views (Panels and Components)

Passive Views (Panels or Components) are simply views without any rich interaction logic attached, similar to a Book or Newspaper.

### Notes

Renamed the acronym to MV@ to distinguish it from the MVA (Model View Adaptor) pattern, which I discovered today (2026-01-06).

## Citations

[Model View View Model#1.3.6.1.4.1.33097.3.98](MVVM.md)