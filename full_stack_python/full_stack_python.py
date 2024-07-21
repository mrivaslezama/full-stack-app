"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from rxconfig import config


class State(rx.State):
    """The app state."""
    label = "Somos una empresa familar con más de 10 años de experiencia en el mercado."
    orginal_label = label
    cool_label = "Queremos ayudarte a desarrollar tus proyectos"

    def change_label(self):
        if self.label == "Queremos ayudarte a desarrollar tus proyectos":
            self.label = self.orginal_label
        else:
            self.label = "Queremos ayudarte a desarrollar tus proyectos"
    ...




def index() -> rx.Component:
    # Welcome Page (Index)
    return rx.container(
        rx.color_mode.button(position="top-right"),
        rx.vstack(
            rx.heading("Bienvenidos!", size="9"),
             rx.heading("Somos Autana Muebles", size="7"),
              rx.heading(State.label, " Diseño y construcción de muebles", size="5"),
            rx.text(
                "Get started by editing ",
                rx.code(f"{config.app_name}/{config.app_name}.py"),
                size="5",
            ),
            # Dinamic changes - event handler on_click
            rx.button("Do something!", on_click=State.change_label),
            rx.link(
                rx.button("Check out our docs!"),
                href="https://reflex.dev/docs/getting-started/introduction/",
                is_external=True,
            ),
            spacing="5",
            justify="center",
            min_height="85vh",
        ),
        rx.logo(),
    )


app = rx.App()
app.add_page(index)
