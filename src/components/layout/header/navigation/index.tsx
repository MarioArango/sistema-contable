"use client";
import { useEffect, useState } from "react";
import { Socket, connect } from "socket.io-client";
import { backendURL } from "@/utils/config";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import NavigatorReleased from "./NavigatorReleased";
import NavigatorProtected from "./NavigatorProtected";
import { rxSetSocket } from "@/redux/actions/sockets/services";
import "./index.scss";

const connectSocketServer = () => {
  const socketIO = connect(backendURL, {
    transports: ["polling", "websocket", "flashsocket"],
  });
  return socketIO;
}

export default function Navigation() {
  //STATE OWN COMPONENT
  const [socketIO, setSocketIO] = useState<Socket>(connectSocketServer());
  const [online, setOnline] = useState(false);

  const { user } = useAppSelector(({ auth }) => auth);

  //EXECUTOR OF ACTIONS REDUX
  const dispatch = useAppDispatch();

  useEffect(() => {
    socketIO.on('connect', () => {
      setOnline(socketIO.connected)
      dispatch(rxSetSocket({socket: socketIO}))
    })
  }, [socketIO])

  useEffect(() => {
    socketIO.on('disconnect', () => {
      setOnline(socketIO.connected)
    })
  }, [socketIO])
  
  return (
    <>
      <NavigatorReleased/>
      <NavigatorProtected/>
    </>
  )
}
