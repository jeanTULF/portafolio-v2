import { Button, Label, TextInput, Textarea } from "flowbite-react";

export const ContactForm = () => {

return (
        <>
            <div className="flex flex-col flex-grow  px-10 py-20 rounded-lg gap-10 
            bg-gradient-to-b from-darkCardGradient-primary to-darkCardGradient-secondary border-borderDark"> 
                <ul className="flex flex-col sm:grid grid-cols-2 gap-10">
                    <li className="flex-grow">
                        <div className="mb-2 block">
                            <Label htmlFor="nombre" value="Nombre"  className="text-textDark font-semibold text-base"/>
                        </div>
                        <TextInput 
                        type="text" 
                        sizing="md" 
                        theme={{field:{input:{colors:{gray:'outline-none border-gray-600 bg-borderDark text-white'}}}}}
                        className="outline-none bg-gradient-to-b from-darkCardGradient-primary to-darkCardGradient-secondary border-borderDark"/>
                    </li>
                    <li className="flex-grow">
                        <div className="mb-2 block ">
                            <Label htmlFor="apellido" value="Apellido"  className="text-textDark font-semibold text-base"/>
                        </div>
                        <TextInput 
                        type="text" 
                        sizing="md" 
                        theme={{field:{input:{colors:{gray:'outline-none border-gray-600 bg-borderDark text-white'}}}}}
                        />
                    </li>
                    <li className="flex-grow">
                        <div className="mb-2 block ">
                            <Label htmlFor="email" value="Correo electrónico"  className="text-textDark font-semibold text-base"/>
                        </div>
                        <TextInput 
                        type="text" 
                        sizing="md" 
                        theme={{field:{input:{colors:{gray:'outline-none border-gray-600 bg-borderDark text-white'}}}}}
                        />
                    </li>
                    <li className="flex-grow">
                        <div className="mb-2 block ">
                            <Label htmlFor="telefono" value="Teléfono"  className="text-textDark font-semibold text-base"/>
                        </div>
                        <TextInput 
                        type="text" 
                        sizing="md" 
                        theme={{field:{input:{colors:{gray:'outline-none border-gray-600 bg-borderDark text-white'}}}}}
                        />
                    </li>
                </ul>
                <div className="w-full">
                    <div className="mb-2 block">
                        <Label htmlFor="message" value="Mensaje" className="text-textDark font-semibold text-base"/>
                    </div>
                    <Textarea id="message" placeholder="Mensaje..." className="placeholder:text-white 
                    bg-borderDark border-none outline-none text-white" required rows={6}  />
                </div>
                <Button type="sumbit" className="w-36 transform transition duration-300 hover:scale-110 bg-gradient-to-b from-buttonDark to-buttonDark text-white">
                    Enviar
                </Button>
            </div>
        </>
     );
};