import reflex as rx

def multi() -> rx.Component:
    return rx.flex(
            rx.flex(
                rx.box(
                    bg=rx.color("accent", 3),
                    width=["100%", "100%", "50%"],
                    height="100%",
                ),
                rx.box(
                    bg=rx.color("accent", 5),
                    width=["100%", "100%", "50%"],
                    height="100%",
                ),
                width="100%",
                height="100%",
                spacing="4",
                flex_direction=["column", "column", "row"],
            ),
            rx.box(
                bg=rx.color("accent", 7), width="100%", height="50%"
            ),
            rx.box(
                bg=rx.color("accent", 9), width="100%", height="50%"
            ),
            bg=rx.color("accent", 10),
            spacing="4",
            padding="1em",
            flex_direction="column",
            height="600px",
            width="100%",
        )