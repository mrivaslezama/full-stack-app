import reflex as rx
from .nav import navbar
from rxconfig import config

def base_page(child: rx.Component, *args, **kwargs) -> rx.Component:
    # print([type(x) for x in args])
    return rx.container(
        navbar(),
        child,
        rx.logo(),
        rx.color_mode.button(position="top-right", id='my-light-mode-btn'),
        id="my-base-container"
    )