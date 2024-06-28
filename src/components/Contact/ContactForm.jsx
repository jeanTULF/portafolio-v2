import { Button, Label, TextInput, Textarea } from "flowbite-react";

export const ContactForm = () => {

return (
        <>
            <div className="flex flex-col flex-grow bg-gradient-to-b from-cardGradient-secondary to-formGradient px-10 py-20 rounded-lg gap-10 
            dark:bg-gradient-to-b dark:from-darkCardGradient-primary dark:to-darkCardGradient-secondary dark:border-borderDark"> 
                <ul className="flex flex-col sm:grid grid-cols-2 gap-10">
                    <li className="flex-grow">
                        <div className="mb-2 block">
                            <Label htmlFor="nombre" value="Nombre"  className="text-textAccent font-semibold text-base"/>
                        </div>
                        <TextInput 
                        type="text" 
                        sizing="md" 
                        theme={{field:{input:{colors:{gray:'border-gray-300 bg-gray-50 text-gray-900 outline-none dark:border-gray-600 dark:bg-borderDark dark:text-white'}}}}}
                        className="outline-none dark:bg-gradient-to-b dark:from-darkCardGradient-primary dark:to-darkCardGradient-secondary dark:border-borderDark"/>
                    </li>
                    <li className="flex-grow">
                        <div className="mb-2 block ">
                            <Label htmlFor="apellido" value="Apellido"  className="text-textAccent font-semibold text-base"/>
                        </div>
                        <TextInput type="text" sizing="md" />
                    </li>
                    <li className="flex-grow">
                        <div className="mb-2 block ">
                            <Label htmlFor="email" value="Correo electrónico"  className="text-textAccent font-semibold text-base"/>
                        </div>
                        <TextInput type="text" sizing="md" />
                    </li>
                    <li className="flex-grow">
                        <div className="mb-2 block ">
                            <Label htmlFor="telefono" value="Teléfono"  className="text-textAccent font-semibold text-base"/>
                        </div>
                        <TextInput type="text" sizing="md" />
                    </li>
                </ul>
                <div className="w-full">
                    <div className="mb-2 block">
                        <Label htmlFor="message" value="Mensaje" className="text-textAccent font-semibold text-base"/>
                    </div>
                    <Textarea id="message" placeholder="Mensaje..." className="dark:placeholder:text-white 
                    dark:bg-borderDark dark:border-none" required rows={6}  />
                </div>
                <Button type="sumbit" className="w-36 bg-gradient-to-b from-buttonbgGradient-primary to-buttonbgGradient-secondary 
                text-titleAccent transform transition duration-300 hover:scale-110 dark:from-buttonDark dark:to-buttonDark dark:text-white">
                    Enviar
                </Button>
            </div>
        </>
     );
};