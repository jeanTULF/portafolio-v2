import { Button, Label, TextInput, Textarea } from "flowbite-react";

export const ContactForm = () => {

return (
        <>
            <div className="flex flex-col flex-grow bg-gradient-to-b from-cardGradient-secondary to-formGradient px-10 py-20 rounded-lg gap-10 "> 
                <ul className="flex flex-col sm:grid grid-cols-2 gap-10">
                    <li className="flex-grow">
                        <div className="mb-2 block">
                            <Label htmlFor="base" value="Nombre"  className="text-textAccent font-semibold text-base"/>
                        </div>
                        <TextInput id="base" type="text" sizing="md" className=""/>
                    </li>
                    <li className="flex-grow">
                        <div className="mb-2 block ">
                            <Label htmlFor="base" value="Apellido"  className="text-textAccent font-semibold text-base"/>
                        </div>
                        <TextInput id="base" type="text" sizing="md" />
                    </li>
                    <li className="flex-grow">
                        <div className="mb-2 block ">
                            <Label htmlFor="base" value="Correo electrónico"  className="text-textAccent font-semibold text-base"/>
                        </div>
                        <TextInput id="base" type="text" sizing="md" />
                    </li>
                    <li className="flex-grow">
                        <div className="mb-2 block ">
                            <Label htmlFor="base" value="Teléfono"  className="text-textAccent font-semibold text-base"/>
                        </div>
                        <TextInput id="base" type="text" sizing="md" />
                    </li>
                </ul>
                <div className="w-full">
                    <div className="mb-2 block">
                        <Label htmlFor="message" value="Mensaje" className="text-textAccent font-semibold text-base"/>
                    </div>
                    <Textarea id="message" placeholder="Mensaje..." required rows={6}  />
                </div>
                <Button type="sumbit" className="w-36">
                    Enviar
                </Button>
            </div>
        </>
     );
};