"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from rxconfig import config
from .ui.base import base_page


class State(rx.State):
    """The app state."""
    label = "Bienvenidos!"
    
    def handle_title_input_change(self, val):
        self.label = val

    def did_click(self):
        print("Esta pagina de prueba comienza a ser productiva")
    ...



def index() -> rx.Component:
    # Welcome Page (Index)
    return base_page( 
        rx.vstack(
            rx.heading(State.label, size="9"),
            rx.text(
                "Get started by editing ",
                rx.code(f"{config.app_name}/{config.app_name}.py"),
                size="5",
            ),
        # Dinamic input form (input value)
        # <input type='text' value='My value' />
            rx.input(
                default_value=State.label,
                on_click=State.did_click, #This will show on the console!
                on_change=State.handle_title_input_change),
            rx.link(
                rx.button("Check out our docs!"),
                href="https://reflex.dev/docs/getting-started/introduction/",
                is_external=True,
            ),
            spacing="5",
            justify="center",
            min_height="85vh",
        ),
        #Building components
        
    )


app = rx.App()
app.add_page(index)
