import reflex as rx

from .nav import navbar

from rxconfig import config

def base_page(child: rx.Component, *args, **kwargs) -> rx.Component:
    return rx.fragment(
        navbar(),
        rx.box(
            child,
            bg=rx.color("accent", 3),
            padding="1em",
            width="100%",
        ),
        rx.logo(),
        rx.color_mode.button(position="bottom-left", id='my-light-mode-btn'),
        id="my-base-container"
    )