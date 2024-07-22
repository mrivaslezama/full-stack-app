"""Welcome to Reflex! This file outlines the steps to create a basic app."""
import reflex as rx

from rxconfig import config
from .ui.card import card
from .ui.multi import multi
from .ui.contact import contact_form
from .ui.toast import try_some_toast
from .ui.base import base_page


class State(rx.State):
    """The app state."""
    label = "Bienvenidos!"
    
    ...
    
def index() -> rx.Component:
    my_child = rx.vstack(
            rx.heading("Consultor", size="9"),
            rx.text(
                "Comentarios y estudios de analisis políticos, sociales y tecnológicos"
            ),
            rx.html(
                "<img src='https://reflex.dev/reflex_banner.png' />"
            ),
              multi(),
              card(),
              try_some_toast(),
            spacing="5",
            justify="center",
            align="center",
            min_height="85vh",
            id='my-child',
        ),
        

    return base_page(my_child)   

def nosotros() -> rx.Component:
    my_child = rx.vstack(
        rx.heading("Nosotros", size="9"),
        rx.text(
            "Analisis filosoficos, políticos, sociales y tecnológicos"
        ),
        spacing="5",
        justify="center",
        align="center",
        min_height="85vh"
        )
    return base_page(my_child)

def contactanos() -> rx.Component:
    my_child = rx.vstack(
        rx.heading("Nosotros", size="9"),
        contact_form(),    
        spacing="5",
        justify="center",
        align="center",
        min_height="85vh"
        )
    return base_page(my_child)

    


app = rx.App()
app.add_page(index)
app.add_page(nosotros, route='nosotros')
app.add_page(contactanos, route='contactanos')

