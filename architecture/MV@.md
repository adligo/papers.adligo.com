# MV@ (Model View Attendant)

<div>
<strong>Author:</strong> Scott Morgan<br/>
<strong>Created:</strong> 2026-01-04<br/>
<strong>Edited:</strong> 2026-01-04<br/>
<strong>Id:</strong> 1.3.6.1.4.1.33097.3.100<br/>
<strong>Copywrite 2020-2026 Adligo Inc</strong>
</div>

NOTE:
Note MV@ was depricated on 2026-01-10, due to work on [UITs](https://github.com/adligo/uit.ts.adligo.org).
Move to the [MVP@#1.3.6.1.4.1.33097.3.101](MVP@.md) design pattern.

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

## View Attendant Binding

The MV@ design pattern has a few binding styles

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

Modern in browser JavaScript applications leveraging reactive style frameworks like [React.js](https://react.dev/) and [Svelt.js](https://svelte.dev/) are driven by the view, which is set into the Attendant as it is passed in via props.

```


```



### Notes

Renamed the acronym to MV@ to distinguish it from the [Model View Adaptor#1.3.6.1.4.1.33097.3.94](MVA.md) pattern, which I discovered today (2026-01-06).

## Citations

[Model View View Model#1.3.6.1.4.1.33097.3.98](MVVM.md)