"""Welcome to Reflex! This file outlines the steps to create a basic app."""
import reflex as rx

from rxconfig import config
from .ui.card import card
from .ui.multi import multi
from .ui.contact import contact_form
from .ui.toast import try_some_toast
from .ui.avatar import avatar
from .ui.base import base_page
from .ui.cards import *


class State(rx.State):
    """The app state."""
    label = "Bienvenidos!"
    
    ...
    
def index() -> rx.Component:
    my_child = rx.vstack(
              avatar(),
            rx.heading("Hola, soy Miguel!", 
            size="9",
            justify="center",
            aling="center",
            ),
            rx.text(
                "Desarrollador web", 
                size="7",
                justify="center",
                aling="center",
            ),

                
        # Contactos --RRSS
        rx.hstack(
             rx.link(
                rx.avatar(
                    src="/correo-electronico-verificado.png",
                    width="3em",
                    height="3em",
                    border_radius="20%",
                    margin_bottom="8px",
                ),
                href="https://github.com/mrivaslezama",
                target="_blank",
             ),


             rx.link(
                rx.avatar(
                    src="/github.png",
                    width="3em",
                    height="3em",
                    border_radius="20%",
                    margin_bottom="8px",
              ),
                href="https://github.com/mrivaslezama",
                target="_blank",
             ),

             rx.link(
                rx.avatar(
                    src="/medios-de-comunicacion-social.png",
                    width="3em",
                    height="3em",
                    border_radius="20%",
                    margin_bottom="8px",
                ),
                
                href="https://x.com/mrivaslezama",
                target="_blank",
            ),
           ),     
            #Asesor comentarios ...
            rx.text(    
                "Asesor en tecnologías web, Ruby on Rails, Python y Reflex ", 
                size="7",
                justify="center",
                aling="center",
            ),

            rx.hstack(
                rx.image(
                    src="/rails.png",
                    width="5em",
                    height="5em",
                    border_radius="50%",
                    margin_bottom="8px",
                ),
                rx.image(
                    src="/python.png",
                    width="5em",
                    height="5em",
                    border_radius="50%",
                    margin_bottom="8px",
                ),
                rx.image(
                    src="/github.png",
                    width="5em",
                    height="5em",
                    border_radius="20%",
                    margin_bottom="8px",
                )
              ),

#Stacks ...

            rx.hstack(
                rx.image(
                    src="/postgresql.png",
                    width="5em",
                    height="5em",
                    border_radius="20%",
                    margin_bottom="8px",
                ),
                rx.image(
                    src="/bootstrap.png",
                    width="5em",
                    height="5em",
                    border_radius="20%",
                    margin_bottom="8px",
                ),
                rx.image(
                    src="/reflex_banner.png",
                    width="5em",
                    height="5em",
                    border_radius="20%",
                    margin_bottom="8px",
                )
            ),

    

              # Proyectos --- galeria

            rx.heading("Proyectos", 
            size="9",
            padding_top="8rem"
            ),
            rx.text(
                "Proyectos desarrollados", 
                size="7",
                padding_bottom="8rem",

                
            ),
            rx.vstack(
                rx.link("Ejercicio ruby on rails, sitio de noticias", href="https://therialnews-thrumming-wind-7180.fly.dev/", target="_blank"),
                rx.link("Ejercicio ruby on rails, app Crazy4cats", href="https://crazy4cats.fly.dev/", target="_blank"),
                rx.link("Ejercicio, sitio de viajes", href="https://mrivaslezama.github.io/pruebaviajeschile/", target="_blank"),
                

            ),

            pricing_cards(),
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
        rx.text("Como Emprendedor Digital, manejo el ciclo de vida del producto bajo un enfoque ágil, con la capacidad de generar MVP para ser validados en el mercado. "            
        ),
        rx.text("Implementa prototipos funcionales de aplicativos web utilizando tecnologías Ruby on Rails ó Python Reflex. "            
        ),
        spacing="5",
        justify="center",
        align="center",
        min_height="85vh"
        )
    return base_page(my_child)

def contactanos() -> rx.Component:
    my_child = rx.vstack(
        rx.heading("Contacto", size="9"),
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

