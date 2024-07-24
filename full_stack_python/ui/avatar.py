import reflex as rx

def avatar() -> rx.Component:
    return rx.image(
        src="/miguel.png",
        width="250px",
        height="250px",
        border_radius="50%",
        margin_bottom="8px",
    )

       