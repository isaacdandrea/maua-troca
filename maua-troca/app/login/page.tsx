'use client'
import * as React from "react"
import { useState } from "react"
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'
import { useRouter } from 'next/navigation' // Importe o useRouter para redirecionamento
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { IoArrowBack } from 'react-icons/io5'
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
type Checked = DropdownMenuCheckboxItemProps["checked"]

export default function Login() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const router = useRouter()  // Instanciando o hook useRouter

    const handleLogin = () => {
        // Verifica se o nome e o email são iguais aos valores esperados
        if (name === "admin" && email === "admin12345") {
            // Se for, redireciona para a página desejada
            router.push("/outra-pagina") // Altere para a página de destino
        } else {
            alert("Credenciais inválidas") // Alerta se as credenciais forem incorretas
        }
    }

    return (
        <main className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat">

            {/* Div de imagem de fundo com blur */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/foto_login.jpg')",
                    filter: "blur(8px)",
                    zIndex: -1
                }}
            />

            {/* Ícone de voltar */}
            <Link href="/" className="absolute top-4 left-4 text-customOrange hover:text-customBlue text-3xl">
                <IoArrowBack />
            </Link>

            {/* Conteúdo principal */}
            <div className="w-[400px] p-6 ">
                <Tabs defaultValue="login" className="w-full border-none shadow-none ">
                    <TabsList className="grid w-full grid-cols-2 border-none bg-customWhite">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="cadastrar-se">Cadastrar</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <Card className="bg-customWhite">
                            <CardHeader>
                                <CardTitle>Login</CardTitle>
                                <CardDescription>Realize seu login</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Nome</Label>
                                    <Input
                                        id="name"
                                        placeholder="Seu nome"
                                        className="placeholder-gray-400 bg-white"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} // Atualiza o estado do nome
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="email">Senha</Label>
                                    <Input
                                        id="email"
                                        placeholder="Seu E-mail"
                                        className="placeholder-gray-400 bg-white"
                                        type="password"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className={`${buttonVariants({ variant: "outline" })} bg-customOrange text-white hover:bg-customBlue mt-7 rounded-xl`}
                                    onClick={handleLogin} // Chama a função de login
                                >
                                    Entrar
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="cadastrar-se">
                        <Card className="bg-customWhite">
                            <CardHeader>
                                <CardTitle>Cadastrar-se</CardTitle>
                                <CardDescription>
                                    Caso não tenha uma conta, realize seu cadastro aqui.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current">Nome</Label>
                                    <Input id="current" placeholder="Seu nome" className="placeholder-gray-400 bg-white" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="new">Email</Label>
                                    <Input id="new" placeholder="Seu email" className="placeholder-gray-400 bg-white" />
                                </div>


                                <div className="space-y-1">
                                    <Label htmlFor="new">Senha</Label>
                                    <Input placeholder="Sua Senha" className="placeholder-gray-400 bg-white" type="password" />
                                    {/* <Select>
                                        <SelectTrigger className="bg-white w-full justify-start text-left">
                                            <SelectValue placeholder="Selecione seu Ano" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="1ano">1° Ano</SelectItem>
                                                <SelectItem value="2ano">2° Ano</SelectItem>
                                                <SelectItem value="3ano">3° Ano</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select> */}
                                </div>



                            </CardContent>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current-room">Sala atual</Label>
                                    <Input id="current-room" placeholder="Sala atual" className="placeholder-gray-400 bg-white" />
                                </div>
                            </CardContent>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="desired-room">Sala desejada</Label>
                                    <Input id="desired-room" placeholder="Sala desejada" className="placeholder-gray-400 bg-white" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Link className={`${buttonVariants({ variant: "outline" })} bg-customOrange text-white hover:bg-customBlue mt-7 rounded-xl`} href="" >Realizar cadastro</Link>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    );
}
