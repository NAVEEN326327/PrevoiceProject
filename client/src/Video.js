import React, { useEffect, useState, useRef } from 'react';
import './Video.css';
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";


const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  // width: 100%;
`;

const Video = styled.video`
  width: 50%;
  height: 100%;
  margin-left:1%;
  margin-right:1%;
`;

function Video1() {
  const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);

  const userVideo = useRef();
  const partnerVideo = useRef();
  const socket = useRef();

  useEffect(() => {
    socket.current = io.connect("https://majorprojectapi.herokuapp.com/");
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      setStream(stream);
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    })

    socket.current.on("yourID", (id) => {
      setYourID(id);
    })
    socket.current.on("allUsers", (users) => {
      setUsers(users);
    })

    socket.current.on("hey", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    })
  }, []);

  function callPeer(id) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    peer.on("signal", data => {
      socket.current.emit("callUser", { userToCall: id, signalData: data, from: yourID })
    })

    peer.on("stream", stream => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    socket.current.on("callAccepted", signal => {
      setCallAccepted(true);
      peer.signal(signal);
    })

  }

  function acceptCall() {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", data => {
      socket.current.emit("acceptCall", { signal: data, to: caller })
    })

    peer.on("stream", stream => {
      partnerVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
  }

  let UserVideo;
  if (stream) {
    UserVideo = (
      <Video playsInline muted ref={userVideo} autoPlay />
    );
  }

  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = (
      <Video playsInline ref={partnerVideo} autoPlay />
    );
  }

  let incomingCall;
  if (receivingCall) {
    incomingCall = (
      <div className="cont">
        <h4>{caller} is <bold>calling you.....  </bold></h4>
        <button className="btn btn-dark" onClick={acceptCall}>Accept/Decline</button>
      </div>
    )
  }
  return (
    <Container>
      <Row >
        <div className="first">
          <Row className="left-screen">
          {UserVideo}

          </Row>
          <Row >
            {incomingCall}
          </Row>
        </div>
        {PartnerVideo}
      </Row>



      <Row className="cont">
        <h1>Active Users</h1>

        {Object.keys(users).map(key => {
          if (key === yourID) {
            return null;
          }
          return (
            <button className=" btn btn-success bt" onClick={() => callPeer(key)}>Call {key}</button>
          );
        })}
      </Row>

    </Container>
  );
}



export default Video1;