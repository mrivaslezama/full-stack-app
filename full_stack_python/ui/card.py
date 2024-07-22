import reflex as rx

def card() -> rx.Component:
    return rx.container( 
            rx.hstack(
                rx.card(
                    rx.image(
                                src="/tekaart.jpg",
                                width="100%",
                                height="auto",
                            ),
                    "Diseños 3d", size="4"
                    ),
                rx.card(
                    rx.image(
                                src="/logo2.jpg",
                                width="100%",
                                height="auto",
                            ),
                    "Asesoramiento de imagen", size="4"                    
                    ),
               
                spacing="2",
                align_items="flex-center",
                flex_wrap="wrap",
                align="center",
                text_align="center"
    )
)