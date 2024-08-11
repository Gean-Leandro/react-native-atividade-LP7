import { Text, View, Image } from "react-native";
import * as React from 'react';
import { Button } from "@rneui/base";
import tool_img from '../assets/icons/tool.png';
import house_img from '../assets/icons/home.png';
import knife_img from '../assets/icons/knife.png';
import car_img from '../assets/icons/car.png';

export interface LoginScreenProps{
}

let text_color_header:string = "text-white ";
let align_items:string = "justify-start items-center ";
let bg_icons:string = "bg-[#444140] ";
let bg_rows:string = "bg-[#FFF] ";

export function LoginScreen(props: LoginScreenProps){
    return (
        <View className="h-[100%] bg-[#F7EBE8]">
            <View className="bg-[#E54B4B] w-[100%] h-1/2 rounded-b-[60px] p-5">
                <View className= "w-[100%] h-[100%]">
                    <View className={"flex-1 p-2 mt-7 mb-6 h-1/3" + align_items}>
                        <Text className={text_color_header + "text-[30px]"}>
                            Bem vindo, Carlos
                        </Text>
                    </View>
                    <View className={"flex-1 h-1/3" + align_items}>
                        <Text className={text_color_header}>
                            Você gastou hoje
                        </Text>
                        <Text className={text_color_header + "text-[30px] h-1/3"}>
                            R$ 500
                        </Text>
                    </View>
                    <View className={"flex h-1/3 justify-end pb-2"}>
                        <View className={align_items + "mb-4"}>
                            <Text className={text_color_header}>
                                ESCOLHER PERÍODO:
                            </Text>
                        </View>
                        <View className="flex flex-row">
                            <View className={"flex basis-1/3 " + align_items}>
                                <Text className={text_color_header + align_items}>Hoje</Text>
                            </View>
                            <View className={"flex basis-1/3 " + align_items}>
                                <Text className={text_color_header + align_items}>Essa Semana</Text>
                            </View>
                            <View className={"flex basis-1/3 " + align_items}>
                                <Text className={text_color_header + align_items}>Esse Mês</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="flex flex-row pt-4 pb-4 pl-2 pr-2">
                <View className={bg_icons + "w-[14%] ml-[3%] mr-[3%] rounded"}>
                    <Button icon={{name:"airplanemode-active", color:"white"}} type="clear"/>
                </View>
                <View className={bg_icons + "w-[14%] ml-[3%] mr-[3%] rounded justify-center items-center"}>
                    <Image source={house_img} style={{height:25, width:25}}/>
                </View>
                <View className={bg_icons + "w-[14%] ml-[3%] mr-[3%] rounded justify-center items-center"}>
                    <Image source={knife_img} style={{height:25, width:25}}/>
                </View>
                <View className={bg_icons + "w-[14%] ml-[3%] mr-[3%] rounded justify-center items-center"}>
                    <Image source={car_img} style={{height:25, width:25}}/>
                </View>
                <View className={bg_icons + "w-[14%] ml-[3%] mr-[3%] rounded flex justify-center items-center"}>
                    <Image source={tool_img} style={{height:25, width:25}}/>
                </View>
            </View>
            <View className="flex mr-5 ml-5">
                <View className={bg_rows + "flex flex-row p-5 rounded-[10px] mb-4"}>
                    <View className="w-[75%]">
                        <Text>Pizza (R$ 30)</Text>
                    </View>
                    <View className="w-[25%]">
                        <Text>20/09/2020</Text>
                    </View>
                </View>
                <View className={bg_rows + "flex flex-row p-5 rounded-[10px]"}>
                    <View className="w-[75%]">
                        <Text>Coca-Cola (R$ 10)</Text>
                    </View>
                    <View className="w-[25%]">
                        <Text>20/09/2020</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}