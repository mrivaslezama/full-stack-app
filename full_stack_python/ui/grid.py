import reflex as rx

def grid() -> rx.Component:
    return rx.grid(
                rx.foreach(
                    rx.Var.range(2),
                    lambda i: rx.card(
                        rx.inset(
                            rx.image(
                                src="/reflex_banner.png",
                                width="100%",
                                height="auto",
                            ),
                            side="top",
                            pb="current",
                            align_items="center",
                        ),
                        rx.text(
                            f"Card {i + 1}",
                        ),
                    ),
                ),
    gap="1rem",
    grid_template_columns=[
        "1fr",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
    ],
    width="100%",
)