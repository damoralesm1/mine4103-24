import React, { useState, useEffect, useRef } from 'react';
import { Graph } from 'graphology';
import { Sigma } from 'sigma';
import { NodeImageProgram } from "@sigma/node-image";
import "@react-sigma/core/lib/react-sigma.min.css";
import { MdZoomIn, MdZoomOut, MdRefresh } from 'react-icons/md';
import { CiSearch } from "react-icons/ci";
import { GrClearOption } from "react-icons/gr";
import 'bootstrap/dist/css/bootstrap.min.css';

const GraphComponent = () => {
    const containerRef = useRef(null);
    const sigmaInstance = useRef(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // Crear un nuevo gráfico vacío
        const graph = new Graph();
        graph.addNode("p_3G Erosion", { label: "3G Erosion", x: 0.5025201383563612, y: -0.33028645703564535, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("p_Div 00", { label: "Div 00", x: 0.12284821056397875, y: -0.3755693311482179, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("p_OtC RADAR Capacity", { label: "OtC RADAR Capacity", x: -0.1109747796852647, y: -0.778524166101753, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("p_Over Par", { label: "Over Par", x: -0.44948677744457743, y: 0.664183892775586, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("p_QEO", { label: "QEO", x: 0.12329282396873735, y: -0.6531352114663785, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("p_Return Notification", { label: "Return Notification", x: -0.15397512937186633, y: -0.5795433926499378, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("p_No Charge Orders", { label: "No Charge Orders", x: 0.5275271082514947, y: 0.3702665244129476, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("p_UBD", { label: "UBD", x: 0.7417612070513613, y: -0.4911770504022929, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("p_87 Delivery Block", { label: "87 Delivery Block", x: 0.2301007133386416, y: 0.20910962684757908, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("p_BOS Zero Dollar", { label: "BOS Zero Dollar", x: -0.08811209205059171, y: -0.5321388154291115, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("p_Zero Dollar Pending", { label: "Zero Dollar Pending", x: 0.7081323043502521, y: 0.5510110145669527, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("p_ZECR Special Credit", { label: "ZECR Special Credit", x: 0.23716726012199102, y: -0.8006298238371953, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("p_EASE", { label: "EASE", x: 0.2299502077054961, y: 0.8665303492765154, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("p_FAST", { label: "FAST", x: -0.8415329433714871, y: -0.4348469501677732, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("p_SPMS", { label: "SPMS", x: -0.8884098597983411, y: -0.9368774184616231, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("p_ERRS", { label: "ERRS", x: 0.8460481426757802, y: -0.5328543996176007, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("SAP Personas", { label: "SAP Personas", x: 0.035550217643799495, y: 0.34664390606874546, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("Fiori Inquiry Apps", { label: "Fiori Inquiry Apps", x: -0.5669684682665909, y: 0.8816770677221102, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("SAP TPS", { label: "SAP TPS", x: -0.9664212754189788, y: -0.2889641829424626, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("p_AAA", { label: "AAA", x: -0.5111874486580904, y: -0.37436698396976353, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("p_OASIS", { label: "OASIS", x: -0.33243948946846946, y: -0.42718589413235136, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("p_MSS", { label: "MSS", x: -0.12648928789182123, y: 0.6407818960937538, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("p_MDNS", { label: "MDNS", x: -0.20119103496761406, y: 0.28508447650337704, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("p_TPS", { label: "TPS", x: -0.27808139537618415, y: 0.11402885314541113, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("AngioOccidente_WS_Template", { label: "AngioOccidente_WS_Template", x: -0.8468280973326958, y: 0.8602784760219278, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("APPI CELA", { label: "APPI CELA", x: 0.7110388788860079, y: 0.49825198239684493, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("APPI_NOLA", { label: "APPI_NOLA", x: 0.7959473606017187, y: -0.6476627673504649, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("APPI_SOLA", { label: "APPI_SOLA", x: -0.7150350918039095, y: 0.062137177907752944, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("ARID", { label: "ARID", x: 0.2940723004560159, y: -0.264398506379634, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("ARPOP", { label: "ARPOP", x: -0.7273483989654949, y: -0.15635386260579345, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("ATOS", { label: "ATOS", x: -0.1075209730518592, y: 0.6131397534997381, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("AUTOMATIC_INVOICE", { label: "AUTOMATIC_INVOICE", x: -0.3060417200280683, y: -0.09995171662909556, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("Automation_WS_SSC (ARTIKOS)", { label: "Automation_WS_SSC (ARTIKOS)", x: -0.01988381165006044, y: 0.6938936423399586, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("BIBOCOL", { label: "BIBOCOL", x: 0.43438002154316047, y: 0.2097151970024635, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("BRAZIL_SLOC8000", { label: "BRAZIL_SLOC8000", x: -0.299206434575968, y: 0.7740213012996988, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("BTC_Despachos_Cruz_Verde", { label: "BTC_Despachos_Cruz_Verde", x: 0.5640916184402336, y: -0.930361879253558, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("BTC_MX_ORDENES_PAGOS_PROGRAMADOS", { label: "BTC_MX_ORDENES_PAGOS_PROGRAMADOS", x: -0.7979650737737258, y: -0.04173958756600734, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("BTC_System_Validation", { label: "BTC_System_Validation", x: -0.3358181165590453, y: -0.3444187720167777, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("BUC SAP", { label: "BUC SAP", x: 0.31173291590917473, y: 0.053312432453052075, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("BTC_BTB_REP", { label: "BTC_BTB_REP", x: 0.5060586004806013, y: -0.15507362626970272, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("CAN OPEN ORDER", { label: "CAN OPEN ORDER", x: 0.5225131109990754, y: 0.5527087076067279, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("CAN_ETA_BO", { label: "CAN_ETA_BO", x: -0.5395372816800655, y: -0.10214949308068857, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("CAN_SHIP_SWICH", { label: "CAN_SHIP_SWICH", x: 0.30732542217005776, y: 0.4570471041082734, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("CARDIOVCHI", { label: "CARDIOVCHI", x: 0.4582334630235179, y: -0.7548875851549915, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("Cenabast Automation process", { label: "Cenabast Automation process", x: 0.048895651903324754, y: 0.2701606596232665, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("CFDI_MATNR_ASGN_MX", { label: "CFDI_MATNR_ASGN_MX", x: -0.1842460298510355, y: -0.9798624163764117, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("CFDI_Mex_System", { label: "CFDI_Mex_System", x: -0.6279284064659139, y: -0.9452811713661058, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("CFDI_Monitor", { label: "CFDI_Monitor", x: 0.544741866298306, y: -0.5753914649919897, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("ChiPendRev", { label: "ChiPendRev", x: 0.46942899899959545, y: -0.26339542815121597, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("CHIPOP", { label: "CHIPOP", x: 0.768827933847969, y: 0.6064791802629942, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("CHISOR", { label: "CHISOR", x: 0.808084026651892, y: 0.61205215586218, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("CIRARG", { label: "CIRARG", x: 0.7106067900955914, y: -0.8089610058840164, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("CIRCHI", { label: "CIRCHI", x: 0.6407707063419142, y: -0.027917573145794565, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("CIRPE", { label: "CIRPE", x: -0.10856353340662628, y: -0.9208278796668063, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("CONSDESO", { label: "CONSDESO", x: -0.49976050693428625, y: -0.9709383270242794, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("CELA MANUAL ALLOCATION", { label: "CELA MANUAL ALLOCATION", x: 0.36507508123048643, y: -0.7499185967805739, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("CR_DR_Reference", { label: "CR_DR_Reference", x: -0.3868890225575392, y: 0.0693775333776904, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("DELETED_DELIVERY", { label: "DELETED_DELIVERY", x: 0.20227278095123516, y: 0.8333192652848778, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("DELIVERY BLOCK LINE LATAM", { label: "DELIVERY BLOCK LINE LATAM", x: -0.7508329233975827, y: -0.39586667883873566, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("DELIVERY_REPORT", { label: "DELIVERY_REPORT", x: -0.8020204813851407, y: 0.058378089966714765, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("DIB_DVL", { label: "DIB_DVL", x: -0.8957201171905516, y: 0.3238253793476369, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("DIPOP", { label: "DIPOP", x: 0.30673359044488896, y: 0.3920438717277071, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("DISPUTES_BR", { label: "DISPUTES_BR", x: 0.8966565247673429, y: 0.09935056901584303, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("DISPUTES_LATAM", { label: "DISPUTES_LATAM", x: 0.7131534554984652, y: 0.8449829799393319, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("DISPUTES_US", { label: "DISPUTES_US", x: 0.39508009369006825, y: -0.817239091616886, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("DISTREP", { label: "DISTREP", x: -0.38979693537230325, y: 0.5605291138650442, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("DOC", { label: "DOC", x: 0.040808464554152324, y: 0.8186287788658739, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("DROP BANREP", { label: "DROP BANREP", x: 0.6817319705372935, y: 0.36393579938946535, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("EBUSSINESS REPORT", { label: "EBUSSINESS REPORT", x: -0.5960541247891837, y: -0.4968533252509265, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("EMAILS BO BRAZIL", { label: "EMAILS BO BRAZIL", x: 0.6360678329100966, y: -0.25512373123641935, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("EMAIL ORR BRAZIL", { label: "EMAIL ORR BRAZIL", x: 0.764871668219286, y: 0.84923928944537, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("EMAIL ORR SOLA", { label: "EMAIL ORR SOLA", x: -0.33505091032833917, y: 0.8607337984893493, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("EMAILS RADAR TO CLOSE", { label: "EMAILS RADAR TO CLOSE", x: 0.191321982966351, y: 0.3817934315957987, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("EMAILS SOLA", { label: "EMAILS SOLA", x: -0.5427099092109423, y: 0.18575958693120362, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("EMPOC", { label: "EMPOC", x: 0.09716080262984365, y: 0.209894474712887, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("FalconSoft_Touchless", { label: "FalconSoft_Touchless", x: 0.7722687037235731, y: 0.3038529858547771, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("FARMAQUIRURGICOS_INV", { label: "FARMAQUIRURGICOS_INV", x: 0.8572008926050222, y: -0.5940297273007489, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("FIC", { label: "FIC", x: -0.2491784779172003, y: -0.8226147624074714, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("FIC BRAZIL", { label: "FIC BRAZIL", x: 0.408625200493554, y: -0.9433448126096127, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("FIC IDS", { label: "FIC IDS", x: 0.2047561099331923, y: 0.789466107125543, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("FORMATO PEDIDOS LATAM", { label: "FORMATO PEDIDOS LATAM", x: -0.9578928387439235, y: 0.7367015120895043, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("FORMATO PEDIDOS BRAZIL", { label: "FORMATO PEDIDOS BRAZIL", x: -0.8638893200093383, y: -0.21947619101036075, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("FUNNEL", { label: "FUNNEL", x: -0.5894703458405334, y: -0.5633834447187728, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("ICE SHAREPOINT", { label: "ICE SHAREPOINT", x: -0.4597770305091891, y: 0.8260066804812547, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("IDIME TIME LINE", { label: "IDIME TIME LINE", x: -0.30265279075864565, y: -0.7306217870277625, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("IDOC FAILURE PANAMA", { label: "IDOC FAILURE PANAMA", x: 0.1523348897936046, y: 0.8382554191586186, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("IDS BILLING DETAILS", { label: "IDS BILLING DETAILS", x: -0.9527071349553521, y: -0.23373084990023432, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("INVOICE TRACKER LATAM", { label: "INVOICE TRACKER LATAM", x: -0.521100548116876, y: 0.49485608537644826, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("INVOICING LATAM ", { label: "INVOICING LATAM ", x: 0.16146095001156294, y: -1.0, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("IV LATAM", { label: "IV LATAM", x: 0.505476642491841, y: 0.18720851595916496, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("KPI EPS LATAM", { label: "KPI EPS LATAM", x: -0.029796689382572208, y: 0.874206075991143, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("KPI INVOICE ERROR BRAZIL", { label: "KPI INVOICE ERROR BRAZIL", x: 0.7235776437291878, y: 0.4292948665360055, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("LT IDS DROP", { label: "LT IDS DROP", x: -0.9344934928387421, y: -0.7329818886993228, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("MACADSURG", { label: "MACADSURG", x: 0.37716089487369575, y: 0.677827912586553, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("MACONFACO", { label: "MACONFACO", x: 0.4081323122349895, y: 0.6068972189148731, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("MAN S194 OPEN ORDER", { label: "MAN S194 OPEN ORDER", x: 0.0711922108661639, y: -0.43480612927540213, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("MARLY TEMPLATES", { label: "MARLY TEMPLATES", x: 0.17790877817787715, y: -0.7520142987776219, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("MEDIMAS", { label: "MEDIMAS", x: -0.6705936251138123, y: 0.8876699943172794, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("MEXDIB", { label: "MEXDIB", x: 0.6354127222829832, y: 0.8600360300824225, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("MEXPACI", { label: "MEXPACI", x: -0.21688079887461503, y: -0.3294326530230636, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("MEXPOP", { label: "MEXPOP", x: -0.6955700699089019, y: -0.7238208349424464, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("MEXSOR", { label: "MEXSOR", x: -0.31487038033567466, y: 0.47677254004835873, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("MICR", { label: "MICR", x: 0.15294601986571596, y: -0.7112011659451295, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("MVMX", { label: "MVMX", x: -0.7911088221195556, y: 0.5023349125410052, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("MX_CQ_REPORT", { label: "MX_CQ_REPORT", x: -0.2817278798972019, y: 0.8989094029951913, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("NC SOLA", { label: "NC SOLA", x: -0.5423716904781296, y: 0.29306268965619015, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("NC NOLA", { label: "NC NOLA", x: -0.1319503983463197, y: 0.9017283574220845, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("OPEN ORDER", { label: "OPEN ORDER", x: 0.7512086384962913, y: -0.3688358438617533, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("OPEN OR1", { label: "OPEN OR1", x: -0.16056913610982493, y: -0.2879665423565891, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("ORDER ACKNOWLEDGMENT", { label: "ORDER ACKNOWLEDGMENT", x: -0.3264850412841439, y: -0.5121564097124667, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("ORR BRAZIL", { label: "ORR BRAZIL", x: 0.11755184378786028, y: -0.31307092361676786, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("ORR LATAM", { label: "ORR LATAM", x: 0.215488356399785, y: -0.07594472484166608, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("PEID", { label: "PEID", x: 0.3293781347000846, y: 0.7539836747148696, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("PID", { label: "PID", x: -0.04675684221707569, y: 0.5291410734255366, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("PLANES MEDICOS PR", { label: "PLANES MEDICOS PR", x: -0.6731340819457143, y: 0.35520955071459376, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("POD REPORT LATAM", { label: "POD REPORT LATAM", x: 0.3628644431662393, y: -0.01205919781573221, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("Power BI DashBoard Invocing LatAm", { label: "Power BI DashBoard Invocing LatAm", x: -0.35224900346562543, y: -0.3003538934573833, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("Power BI DashBoard MSS Case Management", { label: "Power BI DashBoard MSS Case Management", x: -0.6278986967324557, y: 0.14032646749906919, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("Power BI DashBoard Invoice Tracker LatAm", { label: "Power BI DashBoard Invoice Tracker LatAm", x: -0.46262613882029946, y: -0.6293308368912918, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("PR KE TIME LINE", { label: "PR KE TIME LINE", x: -0.17487357280506266, y: 0.5663852662755048, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("PR MANUALL ALLOCATION", { label: "PR MANUALL ALLOCATION", x: -0.789300119953158, y: 0.26996467999625895, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("PR STRATEGIC", { label: "PR STRATEGIC", x: 0.16497332155912664, y: -0.5210121070818302, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("PRICE UPDATE BRAZIL", { label: "PRICE UPDATE BRAZIL", x: 0.9535716515046391, y: 0.33562100767317615, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("RADAR MONITOR", { label: "RADAR MONITOR", x: 0.43396983262103883, y: 0.041641816586508416, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("RASO", { label: "RASO", x: -0.13555678363788243, y: 0.20665088104264606, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("RETIDISTRIARG", { label: "RETIDISTRIARG", x: -0.8181525878534788, y: -0.267954019102792, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("S003 FOB SHIPPING POINT", { label: "S003 FOB SHIPPING POINT", x: -0.40836342242577567, y: 0.29307548403973294, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("SOLA CUSTOMER MASTER", { label: "SOLA CUSTOMER MASTER", x: 0.4279130774278272, y: 0.4033125237183607, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("SOLADIBDEL", { label: "SOLADIBDEL", x: 0.8844008014348399, y: -0.4835239342546799, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("SONOPLAFLIP", { label: "SONOPLAFLIP", x: 0.8970973500546214, y: -0.3551716900975722, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("TIRILLAS BTC", { label: "TIRILLAS BTC", x: 0.6409843537541394, y: -0.720153836892691, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("TRACKING INVOICE PANAMA", { label: "TRACKING INVOICE PANAMA", x: -0.8201388694890887, y: -0.6103336470732859, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("TRACKING NUMBER", { label: "TRACKING NUMBER", x: -0.4606398871552095, y: 0.14056664758267692, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("UNOPS MX", { label: "UNOPS MX", x: -0.8107142866001618, y: 0.8422851876375945, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("UYSOR", { label: "UYSOR", x: -0.12062095069427835, y: 0.36276539413053915, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("VF04 REPORT", { label: "VF04 REPORT", x: -0.19469037670083242, y: -0.9101193115084436, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("VFX3", { label: "VFX3", x: -0.10236643992702948, y: 0.8397814124911018, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("WEI05 IDOC NUMBER", { label: "WEI05 IDOC NUMBER", x: -0.5871265237465355, y: 0.0620370124375679, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("UNIVERSAL WINSHUTTLE", { label: "UNIVERSAL WINSHUTTLE", x: 0.8974637786597056, y: -0.4198403888342449, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("ZTR CONTROL", { label: "ZTR CONTROL", x: 0.6211880975189418, y: -0.3432286526815513, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("Winshuttle Ad-Hoc request", { label: "Winshuttle Ad-Hoc request", x: -0.6319084925396322, y: 0.25503216886370084, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("AGINGREPORT", { label: "AGINGREPORT", x: -0.7489187663661823, y: -0.2679235520406122, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("AGINGREPORT 2,0", { label: "AGINGREPORT 2,0", x: 0.296135410504296, y: 0.49130727197487095, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("ALERTNOT", { label: "ALERTNOT", x: -0.31971473767030184, y: -0.9493348969931871, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("APACCR", { label: "APACCR", x: 0.6167816106376425, y: -0.8550931567820605, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("APACCR 2,0", { label: "APACCR 2,0", x: -0.2198668187066158, y: 0.9147367948731299, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("APPAYM", { label: "APPAYM", x: -0.7536709261642169, y: 0.37652276256749506, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("BANKOI", { label: "BANKOI", x: -0.7157526463999058, y: 0.5978599279072816, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("BLOCKORDERS", { label: "BLOCKORDERS", x: -0.4890419242979583, y: -0.20850170737836174, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("BRAZAGI", { label: "BRAZAGI", x: 0.3847530427417252, y: -0.10828970850316894, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("BSRPJT", { label: "BSRPJT", x: -0.6687452896975643, y: 0.44143439570161286, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("CONCBREVE", { label: "CONCBREVE", x: -0.43765360695806343, y: -0.5386418727600021, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("DEFERRED", { label: "DEFERRED", x: -0.7952367179417412, y: -0.32905200251508077, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("ECLAT", { label: "ECLAT", x: -0.1574541015854927, y: 0.7341522130944284, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("ECLAT_REPDOM", { label: "ECLAT_REPDOM", x: -0.8359214905261448, y: -0.5699480366587261, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("ENVIROACCRUAL", { label: "ENVIROACCRUAL", x: -0.17882806228436873, y: -0.45662969358675454, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("EXEMAIL", { label: "EXEMAIL", x: -0.9328702009218435, y: -0.1735400251227425, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("FBL1N_AMEX", { label: "FBL1N_AMEX", x: 0.7052294417653971, y: 0.7897332663828146, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("FBL1N-EMPLOYEES", { label: "FBL1N-EMPLOYEES", x: -0.4331374079015293, y: 0.7343442205091497, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("FBL5N_CUST_EXTRACT", { label: "FBL5N_CUST_EXTRACT", x: 0.9309311372264507, y: 0.715756078390002, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("FXALATRPT", { label: "FXALATRPT", x: 0.5343967854082821, y: -0.8238510691033079, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("FXCANADA", { label: "FXCANADA", x: 0.8180224835902845, y: 0.7934150942175223, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("INTERDECO", { label: "INTERDECO", x: 0.7845445037510401, y: -0.5988200394109687, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("MASSJE", { label: "MASSJE", x: -0.10038079591420303, y: -0.11361858451376278, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("MASTERD", { label: "MASTERD", x: 0.8163989160872971, y: 0.7485219824656754, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("ORDERUSA", { label: "ORDERUSA", x: 0.5153881619385339, y: -0.4594666425309109, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("PAYMENTREPORT", { label: "PAYMENTREPORT", x: -0.3755337365876997, y: 0.21636036199669878, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("PAYROLLBR", { label: "PAYROLLBR", x: 0.957669544223088, y: 0.42741069618718003, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("R2RCONCI", { label: "R2RCONCI", x: -0.7443850272179664, y: 0.5330871263925656, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("REPORTINGV2", { label: "REPORTINGV2", x: 0.09942640503531251, y: 0.6861483536278192, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("TRACKER", { label: "TRACKER", x: -0.4319489218595532, y: -0.35916742341254815, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("VAT", { label: "VAT", x: 0.7949058519331172, y: -0.7807660249800651, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("WPOPDATA", { label: "WPOPDATA", x: 0.43314818742958416, y: -0.4085827760402265, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("WS_FBL1N", { label: "WS_FBL1N", x: 0.25913232408011694, y: 0.6682163118515415, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("ZOTC_MB51_US_CAN", { label: "ZOTC_MB51_US_CAN", x: 0.49431440821484274, y: 0.7610596818984567, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("Bot Facturas DIAN", { label: "Bot Facturas DIAN", x: -0.7303998317686511, y: 0.3268712570332479, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("Invoice Colombia (C. Care)", { label: "Invoice Colombia (C. Care)", x: 0.4381145348036405, y: 0.2865512647336187, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("Traslado entre institucion (Sub-Module Solicitud Pedidos)", { label: "Traslado entre institucion (Sub-Module Solicitud Pedidos)", x: -0.7573069835450759, y: 0.19530684372397358, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("#21 Collection Government invoices  (Finance)", { label: "#21 Collection Government invoices  (Finance)", x: 0.3429310167618911, y: -0.1953728919984467, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("Solicitação Baixa de Inventario", { label: "Solicitação Baixa de Inventario", x: 0.1341077528899485, y: -0.8311101111696321, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("Vendor Creator", { label: "Vendor Creator", x: 0.650656285214139, y: -0.17642716523215252, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("Reporte de Transito V2", { label: "Reporte de Transito V2", x: -0.6529687298015031, y: -0.07456395787757465, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("Planes Medicos", { label: "Planes Medicos", x: 0.5800310223363586, y: -0.2780738801288418, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("Saving 24/7", { label: "Saving 24/7", x: 0.3082031529165317, y: -0.42867576633796467, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("Back to Home", { label: "Back to Home", x: 0.47385305438070285, y: -0.6070807045325887, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("CELA APPS", { label: "CELA APPS", x: -0.7246713943454856, y: 0.21147720483237278, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("BOT for Structural Heart OCR", { label: "BOT for Structural Heart OCR", x: 0.10042597257959329, y: 0.796264825394862, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("Catalogo de Productos", { label: "Catalogo de Productos", x: -0.0615470223759653, y: -0.4666929250652747, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("Hosp Sao Camilo – APP", { label: "Hosp Sao Camilo – APP", x: -0.08636409873499959, y: -0.26944014025174756, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("OCR tecnovigilancia", { label: "OCR tecnovigilancia", x: -0.8880907997662173, y: -0.4960412977806415, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("#34 Reconciliation Process Automation (RPA Black line Finanzas)", { label: "#34 Reconciliation Process Automation (RPA Black line Finanzas)", x: 0.13609164966024961, y: 0.5390668845108993, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("Sola APP V 1,0", { label: "Sola APP V 1,0", x: 0.27984401858307684, y: -0.5525436027433347, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("APP Inventario NOLA - CELA - SOLA", { label: "APP Inventario NOLA - CELA - SOLA", x: 0.004346517704748872, y: -0.7388295064208953, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("#10 Credit card statement Reconciliation (Snow flake) (Three way match)", { label: "#10 Credit card statement Reconciliation (Snow flake) (Three way match)", x: -0.6867579164696025, y: -0.4754418615872513, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });
        graph.addNode("GFX Finance automation", { label: "GFX Finance automation", x: 0.8496643021079835, y: -0.3073301169268544, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160438.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160438.png" });

        graph.addNode("DS Systems", { label: "DS Systems", x: 0.43169454968885523, y: 0.9259958162962012, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160417.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160417.png" });
        graph.addNode("Customer care", { label: "Customer care", x: -0.5271909250171956, y: -0.6248892222126016, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160417.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160417.png" });
        graph.addNode("Finance", { label: "Finance", x: 0.12345675925308701, y: -0.23481310065869831, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160417.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160417.png" });
        graph.addNode("APPS", { label: "APPS", x: 0.6861292923226596, y: 0.04045140677019583, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160417.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160417.png" });

        graph.addNode("3G Erosion", { label: "3G Erosion", x: -0.4322023727449037, y: -0.9704537093861462, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("Div 00", { label: "Div 00", x: -0.609187582819832, y: -0.6023181496763523, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("OtC RADAR Capacity", { label: "OtC RADAR Capacity", x: 0.3965356433584647, y: -0.40023570104615663, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("Over Par", { label: "Over Par", x: 0.4885968419177341, y: -0.8690746864765019, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("QEO", { label: "QEO", x: -0.8234795010228114, y: 0.10843256738171482, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("Return Notification", { label: "Return Notification", x: 0.44724642479683696, y: 0.8337094671872205, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("No Charge Orders", { label: "No Charge Orders", x: 0.5648317955401821, y: 0.0959423701647228, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("UBD", { label: "UBD", x: -0.5865506972743811, y: -0.21615626932306356, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("87 Delivery Block", { label: "87 Delivery Block", x: 0.8003924435575009, y: 0.14199541026717846, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("BOS Zero Dollar", { label: "BOS Zero Dollar", x: 0.8178999984302393, y: 0.08978463279333741, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("Zero Dollar Pending", { label: "Zero Dollar Pending", x: -0.4529414663353864, y: 0.474791792958636, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("ZECR Special Credit", { label: "ZECR Special Credit", x: -0.4417219720445748, y: 0.550104057213636, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("EASE", { label: "EASE", x: -0.5509678021228951, y: -0.4435530967985528, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("FAST", { label: "FAST", x: -0.8217756861755815, y: 0.1771743396168789, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("SPMS", { label: "SPMS", x: 0.570364176948811, y: 0.7924347807965614, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("ERRS", { label: "ERRS", x: -0.17618156476412275, y: 0.09556240249032345, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("SAP", { label: "SAP", x: 0.6503591936686988, y: 0.0965932847759965, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("AAA", { label: "AAA", x: 0.4875517456997615, y: 0.13404021546046813, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("OASIS", { label: "OASIS", x: 0.11049946805869783, y: 0.37153526046743274, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("MSS", { label: "MSS", x: 0.5739526067263947, y: 0.18642298511285757, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("MDNS", { label: "MDNS", x: 0.487584213650767, y: 0.6195448411430096, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("TPS", { label: "TPS", x: 0.9243028377306017, y: 0.4646464783451541, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("Winshuttle", { label: "Winshuttle", x: 0.6501988626214108, y: -0.6128564340699775, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("Access DB", { label: "Access DB", x: 0.35011425186178674, y: -0.29745436026584593, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("VBA", { label: "VBA", x: -0.7303004339887795, y: -0.019093099297252458, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("Power Platforms", { label: "Power Platforms", x: -0.7265525464479258, y: -0.412092537830545, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("SQL", { label: "SQL", x: 0.0797404599197613, y: -0.7477270015613018, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("Power BI", { label: "Power BI", x: -0.3097736827536462, y: 0.5955302447059199, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("SharePoint", { label: "SharePoint", x: -0.008318683395931538, y: -0.583197412234907, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("Oracle", { label: "Oracle", x: 0.8658995321566557, y: 0.18555912521646362, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });
        graph.addNode("Automation Anywhere", { label: "Automation Anywhere", x: -0.8984916783160176, y: -0.39368959315933727, size: 20, color: "#eee", type: "image", image: "https://cdn-icons-png.freepik.com/512/7160/7160472.png", originalImage: "https://cdn-icons-png.freepik.com/512/7160/7160472.png" });

        // Relaciones Name Category
        graph.addEdge("p_3G Erosion", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("p_Div 00", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("p_OtC RADAR Capacity", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("p_Over Par", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("p_QEO", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("p_Return Notification", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("p_No Charge Orders", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("p_UBD", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("p_87 Delivery Block", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("p_BOS Zero Dollar", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("p_Zero Dollar Pending", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("p_ZECR Special Credit", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("p_EASE", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("p_FAST", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("p_SPMS", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("p_ERRS", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("SAP Personas", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("Fiori Inquiry Apps", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("SAP TPS", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("p_AAA", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("p_OASIS", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("p_MSS", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("p_MDNS", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("p_TPS", "DS Systems", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("AngioOccidente_WS_Template", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("APPI CELA", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("APPI_NOLA", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("APPI_SOLA", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("ARID", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("ARPOP", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("ATOS", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("AUTOMATIC_INVOICE", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("Automation_WS_SSC (ARTIKOS)", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("BIBOCOL", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("BRAZIL_SLOC8000", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("BTC_Despachos_Cruz_Verde", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("BTC_MX_ORDENES_PAGOS_PROGRAMADOS", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("BTC_System_Validation", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("BUC SAP", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("BTC_BTB_REP", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("CAN OPEN ORDER", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("CAN_ETA_BO", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("CAN_SHIP_SWICH", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("CARDIOVCHI", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("Cenabast Automation process", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("CFDI_MATNR_ASGN_MX", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("CFDI_Mex_System", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("CFDI_Monitor", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("ChiPendRev", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("CHIPOP", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("CHISOR", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("CIRARG", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("CIRCHI", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("CIRPE", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("CONSDESO", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("CELA MANUAL ALLOCATION", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("CR_DR_Reference", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("DELETED_DELIVERY", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("DELIVERY BLOCK LINE LATAM", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("DELIVERY_REPORT", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("DIB_DVL", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("DIPOP", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("DISPUTES_BR", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("DISPUTES_LATAM", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("DISPUTES_US", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("DISTREP", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("DOC", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("DROP BANREP", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("EBUSSINESS REPORT", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("EMAILS BO BRAZIL", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("EMAIL ORR BRAZIL", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("EMAIL ORR SOLA", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("EMAILS RADAR TO CLOSE", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("EMAILS SOLA", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("EMPOC", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("FalconSoft_Touchless", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("FARMAQUIRURGICOS_INV", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("FIC", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("FIC BRAZIL", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("FIC IDS", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("FORMATO PEDIDOS LATAM", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("FORMATO PEDIDOS BRAZIL", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("FUNNEL", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("ICE SHAREPOINT", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("IDIME TIME LINE", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("IDOC FAILURE PANAMA", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("IDS BILLING DETAILS", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("INVOICE TRACKER LATAM", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("INVOICING LATAM ", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("IV LATAM", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("KPI EPS LATAM", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("KPI INVOICE ERROR BRAZIL", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("LT IDS DROP", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("MACADSURG", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("MACONFACO", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("MAN S194 OPEN ORDER", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("MARLY TEMPLATES", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("MEDIMAS", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("MEXDIB", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("MEXPACI", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("MEXPOP", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("MEXSOR", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("MICR", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("MVMX", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("MX_CQ_REPORT", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("NC SOLA", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("NC NOLA", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("OPEN ORDER", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("OPEN OR1", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("ORDER ACKNOWLEDGMENT", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("ORR BRAZIL", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("ORR LATAM", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("PEID", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("PID", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("PLANES MEDICOS PR", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("POD REPORT LATAM", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("Power BI DashBoard Invocing LatAm", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("Power BI DashBoard MSS Case Management", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("Power BI DashBoard Invoice Tracker LatAm", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("PR KE TIME LINE", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("PR MANUALL ALLOCATION", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("PR STRATEGIC", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("PRICE UPDATE BRAZIL", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("RADAR MONITOR", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("RASO", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("RETIDISTRIARG", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("S003 FOB SHIPPING POINT", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("SOLA CUSTOMER MASTER", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("SOLADIBDEL", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("SONOPLAFLIP", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("TIRILLAS BTC", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("TRACKING INVOICE PANAMA", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("TRACKING NUMBER", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("UNOPS MX", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("UYSOR", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("VF04 REPORT", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("VFX3", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("WEI05 IDOC NUMBER", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("UNIVERSAL WINSHUTTLE", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("ZTR CONTROL", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("Winshuttle Ad-Hoc request", "Customer care", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("AGINGREPORT", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("AGINGREPORT 2,0", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("ALERTNOT", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("APACCR", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("APACCR 2,0", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("APPAYM", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("BANKOI", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("BLOCKORDERS", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("BRAZAGI", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("BSRPJT", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("CONCBREVE", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("DEFERRED", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("ECLAT", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("ECLAT_REPDOM", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("ENVIROACCRUAL", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("EXEMAIL", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("FBL1N_AMEX", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("FBL1N-EMPLOYEES", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("FBL5N_CUST_EXTRACT", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("FXALATRPT", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("FXCANADA", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("INTERDECO", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("MASSJE", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("MASTERD", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("ORDERUSA", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("PAYMENTREPORT", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("PAYROLLBR", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("R2RCONCI", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("REPORTINGV2", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("TRACKER", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("VAT", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("WPOPDATA", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("WS_FBL1N", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("ZOTC_MB51_US_CAN", "Finance", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("Bot Facturas DIAN", "APPS", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("Invoice Colombia (C. Care)", "APPS", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("Traslado entre institucion (Sub-Module Solicitud Pedidos)", "APPS", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("#21 Collection Government invoices  (Finance)", "APPS", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("Solicitação Baixa de Inventario", "APPS", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("Vendor Creator", "APPS", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("Reporte de Transito V2", "APPS", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("Planes Medicos", "APPS", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("Saving 24/7", "APPS", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("Back to Home", "APPS", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("CELA APPS", "APPS", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("BOT for Structural Heart OCR", "APPS", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("Catalogo de Productos", "APPS", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("Hosp Sao Camilo – APP", "APPS", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("OCR tecnovigilancia", "APPS", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("#34 Reconciliation Process Automation (RPA Black line Finanzas)", "APPS", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("Sola APP V 1,0", "APPS", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("APP Inventario NOLA - CELA - SOLA", "APPS", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("#10 Credit card statement Reconciliation (Snow flake) (Three way match)", "APPS", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });
        graph.addEdge("GFX Finance automation", "APPS", { label: "pertenece a", type: "arrow", size: 2, color: "#ccc" });

        // Relaciones Category-Tool/system App

        graph.addEdge("Customer care", "SQL", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "AAA", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "MDNS", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "OtC RADAR Capacity", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "OASIS", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "SPMS", { size: 2, color: "#ccc" });
        graph.addEdge("Customer care", "SharePoint", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "Div 00", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "BOS Zero Dollar", { size: 2, color: "#ccc" });
        graph.addEdge("Customer care", "Power BI", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "Return Notification", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "3G Erosion", { size: 2, color: "#ccc" });
        graph.addEdge("Finance", "Access DB", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "ERRS", { size: 2, color: "#ccc" });
        graph.addEdge("APPS", "Automation Anywhere", { size: 2, color: "#ccc" });
        graph.addEdge("Finance", "Winshuttle", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "EASE", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "TPS", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "UBD", { size: 2, color: "#ccc" });
        graph.addEdge("Customer care", "Winshuttle", { size: 2, color: "#ccc" });
        graph.addEdge("Customer care", "Power Platforms", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "MSS", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "Over Par", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "FAST", { size: 2, color: "#ccc" });
        graph.addEdge("Customer care", "VBA", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "ZECR Special Credit", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "SAP", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "QEO", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "87 Delivery Block", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "Zero Dollar Pending", { size: 2, color: "#ccc" });
        graph.addEdge("Customer care", "Access DB", { size: 2, color: "#ccc" });
        graph.addEdge("Finance", "VBA", { size: 2, color: "#ccc" });
        graph.addEdge("APPS", "Power Platforms", { size: 2, color: "#ccc" });
        graph.addEdge("DS Systems", "No Charge Orders", { size: 2, color: "#ccc" });
        graph.addEdge("Customer care", "Oracle", { size: 2, color: "#ccc" });

        // Relaciones Proyecto - Tecnologia

        graph.addEdge("BSRPJT", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CARDIOVCHI", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("APPI CELA", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ATOS", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CIRPE", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CARDIOVCHI", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PR KE TIME LINE", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CFDI_Mex_System", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("AGINGREPORT", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DROP BANREP", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ChiPendRev", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PLANES MEDICOS PR", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("p_OASIS", "OASIS", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FBL1N_AMEX", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ICE SHAREPOINT", "SharePoint", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("EBUSSINESS REPORT", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DIB_DVL", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MASSJE", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Solicitação Baixa de Inventario", "Power Platforms", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("INVOICING LATAM ", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FORMATO PEDIDOS BRAZIL", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DISPUTES_LATAM", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("p_QEO", "QEO", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FUNNEL", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MVMX", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FBL1N-EMPLOYEES", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BTC_BTB_REP", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DISPUTES_LATAM", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("UNIVERSAL WINSHUTTLE", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("p_OtC RADAR Capacity", "OtC RADAR Capacity", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("IDIME TIME LINE", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("OPEN ORDER", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ORR BRAZIL", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FIC IDS", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("SOLADIBDEL", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ZTR CONTROL", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FalconSoft_Touchless", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("REPORTINGV2", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("#34 Reconciliation Process Automation (RPA Black line Finanzas)", "Power Platforms", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("p_Div 00", "Div 00", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MVMX", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BTC_MX_ORDENES_PAGOS_PROGRAMADOS", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("INVOICE TRACKER LATAM", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ChiPendRev", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DIPOP", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("IDS BILLING DETAILS", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FORMATO PEDIDOS LATAM", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BTC_System_Validation", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("TIRILLAS BTC", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DROP BANREP", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("VAT", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("AngioOccidente_WS_Template", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("EXEMAIL", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BUC SAP", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("WPOPDATA", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BUC SAP", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BTC_MX_ORDENES_PAGOS_PROGRAMADOS", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MEXPACI", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Reporte de Transito V2", "Power Platforms", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("SONOPLAFLIP", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("SOLADIBDEL", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("INVOICING LATAM ", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CHISOR", "SQL", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DISPUTES_LATAM", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("WPOPDATA", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FIC IDS", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("NC NOLA", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("IV LATAM", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("S003 FOB SHIPPING POINT", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("#10 Credit card statement Reconciliation (Snow flake) (Three way match)", "Automation Anywhere", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("INTERDECO", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MEXPOP", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FIC BRAZIL", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CAN_ETA_BO", "Power BI", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CHISOR", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DISPUTES_US", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MX_CQ_REPORT", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("APPAYM", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Back to Home", "Power Platforms", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DELIVERY_REPORT", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FBL1N_AMEX", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CHISOR", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PR STRATEGIC", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("AGINGREPORT", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("REPORTINGV2", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("APACCR 2,0", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DISPUTES_BR", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CONCBREVE", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Hosp Sao Camilo – APP", "Power Platforms", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ECLAT_REPDOM", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PLANES MEDICOS PR", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("NC SOLA", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Power BI DashBoard MSS Case Management", "Oracle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MICR", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MEDIMAS", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ORR BRAZIL", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Power BI DashBoard MSS Case Management", "SQL", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ZTR CONTROL", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("p_EASE", "EASE", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("EMAIL ORR SOLA", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DOC", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CR_DR_Reference", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FalconSoft_Touchless", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("EMAILS RADAR TO CLOSE", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DELETED_DELIVERY", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("OPEN OR1", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("p_AAA", "AAA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("EMPOC", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("VFX3", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ECLAT_REPDOM", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Sola APP V 1,0", "Power Platforms", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ARID", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MEXDIB", "Power BI", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FXCANADA", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("AUTOMATIC_INVOICE", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("TRACKING INVOICE PANAMA", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("APPI_NOLA", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FalconSoft_Touchless", "Power Platforms", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("INTERDECO", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("LT IDS DROP", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ECLAT", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Power BI DashBoard Invoice Tracker LatAm", "Power BI", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("WEI05 IDOC NUMBER", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PR KE TIME LINE", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CIRARG", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DELIVERY BLOCK LINE LATAM", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("KPI EPS LATAM", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FIC IDS", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("EMPOC", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("VF04 REPORT", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Automation_WS_SSC (ARTIKOS)", "Power Platforms", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("R2RCONCI", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BIBOCOL", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DELIVERY_REPORT", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("APPI_NOLA", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DISTREP", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CAN_SHIP_SWICH", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Vendor Creator", "Power Platforms", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ZOTC_MB51_US_CAN", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("INVOICING LATAM ", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DELIVERY BLOCK LINE LATAM", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("OPEN ORDER", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CHIPOP", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("EMAILS BO BRAZIL", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MAN S194 OPEN ORDER", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("KPI EPS LATAM", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ORDER ACKNOWLEDGMENT", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FXALATRPT", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("R2RCONCI", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MX_CQ_REPORT", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BLOCKORDERS", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MASSJE", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Automation_WS_SSC (ARTIKOS)", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PAYROLLBR", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DISPUTES_BR", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BIBOCOL", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PID", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("p_TPS", "TPS", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("S003 FOB SHIPPING POINT", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("VFX3", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MVMX", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FARMAQUIRURGICOS_INV", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("WS_FBL1N", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FUNNEL", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DEFERRED", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Automation_WS_SSC (ARTIKOS)", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PRICE UPDATE BRAZIL", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DISPUTES_BR", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("TRACKING NUMBER", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BSRPJT", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("TRACKING INVOICE PANAMA", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("UNIVERSAL WINSHUTTLE", "Power Platforms", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FXCANADA", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Power BI DashBoard Invoice Tracker LatAm", "Oracle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PAYROLLBR", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PEID", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ORDERUSA", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("SOLA CUSTOMER MASTER", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("OCR tecnovigilancia", "Power Platforms", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DEFERRED", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("APACCR 2,0", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ARPOP", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PID", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("IDOC FAILURE PANAMA", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("VAT", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("AGINGREPORT", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("OPEN OR1", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ECLAT_REPDOM", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CONSDESO", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("EBUSSINESS REPORT", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Traslado entre institucion (Sub-Module Solicitud Pedidos)", "Power Platforms", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MEXDIB", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MASTERD", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("POD REPORT LATAM", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MASTERD", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BTC_Despachos_Cruz_Verde", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MARLY TEMPLATES", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PID", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MEXSOR", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Invoice Colombia (C. Care)", "Power Platforms", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("VF04 REPORT", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("NC SOLA", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CFDI_MATNR_ASGN_MX", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DIPOP", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("RASO", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Winshuttle Ad-Hoc request", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("KPI INVOICE ERROR BRAZIL", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CAN OPEN ORDER", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MEXPOP", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MEXSOR", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ARPOP", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("EMAILS RADAR TO CLOSE", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("APP Inventario NOLA - CELA - SOLA", "Power Platforms", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MEXDIB", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ENVIROACCRUAL", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("APPI CELA", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CFDI_Monitor", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ChiPendRev", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PRICE UPDATE BRAZIL", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ZTR CONTROL", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CFDI_MATNR_ASGN_MX", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FBL1N_AMEX", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MEXDIB", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("p_BOS Zero Dollar", "BOS Zero Dollar", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("TRACKER", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("TIRILLAS BTC", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ALERTNOT", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("INTERDECO", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BTC_Despachos_Cruz_Verde", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MACADSURG", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("WS_FBL1N", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PEID", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CAN OPEN ORDER", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ALERTNOT", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FBL5N_CUST_EXTRACT", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PR MANUALL ALLOCATION", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PR KE TIME LINE", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("INVOICE TRACKER LATAM", "Power BI", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("POD REPORT LATAM", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("APPAYM", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ATOS", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("EMAILS SOLA", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("RASO", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ENVIROACCRUAL", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("EMPOC", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CFDI_Mex_System", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CFDI_Monitor", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DELETED_DELIVERY", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("IDIME TIME LINE", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DIB_DVL", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("APPI_SOLA", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Planes Medicos", "Power Platforms", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MAN S194 OPEN ORDER", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("POD REPORT LATAM", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MACONFACO", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("APPI CELA", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BRAZIL_SLOC8000", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MASSJE", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Catalogo de Productos", "Power Platforms", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("UNOPS MX", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("WS_FBL1N", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DELIVERY_REPORT", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Automation_WS_SSC (ARTIKOS)", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("VAT", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Power BI DashBoard Invocing LatAm", "Oracle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FIC", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("APACCR", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MEXSOR", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("EBUSSINESS REPORT", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DISTREP", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ECLAT", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BLOCKORDERS", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("GFX Finance automation", "Power Platforms", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ARID", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("AUTOMATIC_INVOICE", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("EXEMAIL", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("INVOICE TRACKER LATAM", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("SOLA CUSTOMER MASTER", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("WEI05 IDOC NUMBER", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ARID", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CIRCHI", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ECLAT", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("p_No Charge Orders", "No Charge Orders", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ORDER ACKNOWLEDGMENT", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PR STRATEGIC", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Power BI DashBoard MSS Case Management", "Power BI", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CONSDESO", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MASTERD", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PAYMENTREPORT", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MACONFACO", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MACADSURG", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DIPOP", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("p_MSS", "MSS", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DOC", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MICR", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("R2RCONCI", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("p_87 Delivery Block", "87 Delivery Block", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("IV LATAM", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BOT for Structural Heart OCR", "Power Platforms", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("p_Over Par", "Over Par", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("p_UBD", "UBD", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("INVOICE TRACKER LATAM", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CIRCHI", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CARDIOVCHI", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CIRCHI", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ORDERUSA", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FIC", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ATOS", "Power Platforms", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("AngioOccidente_WS_Template", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("SOLA CUSTOMER MASTER", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DISTREP", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ORR LATAM", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FIC BRAZIL", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ORDERUSA", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("EMAIL ORR BRAZIL", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PRICE UPDATE BRAZIL", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DEFERRED", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("EMAIL ORR BRAZIL", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BRAZAGI", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CIRPE", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CAN OPEN ORDER", "Power BI", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("KPI EPS LATAM", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CR_DR_Reference", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("TRACKING NUMBER", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("SAP Personas", "SAP", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("TRACKING INVOICE PANAMA", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("IDIME TIME LINE", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ZOTC_MB51_US_CAN", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CELA MANUAL ALLOCATION", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CFDI_MATNR_ASGN_MX", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("WPOPDATA", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PLANES MEDICOS PR", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ATOS", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("SONOPLAFLIP", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Power BI DashBoard Invoice Tracker LatAm", "SQL", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MICR", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PAYMENTREPORT", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DELETED_DELIVERY", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("APACCR", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("AGINGREPORT 2,0", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("LT IDS DROP", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ORR BRAZIL", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PR MANUALL ALLOCATION", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("EXEMAIL", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MEXPACI", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("NC SOLA", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("UNIVERSAL WINSHUTTLE", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CAN_ETA_BO", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DROP BANREP", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CAN OPEN ORDER", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("RETIDISTRIARG", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("#21 Collection Government invoices  (Finance)", "Automation Anywhere", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("RADAR MONITOR", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("IV LATAM", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BIBOCOL", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("KPI INVOICE ERROR BRAZIL", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DELIVERY BLOCK LINE LATAM", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CELA APPS", "Power Platforms", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("VF04 REPORT", "SQL", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("AUTOMATIC_INVOICE", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PR STRATEGIC", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("VFX3", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("RASO", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("EMAILS SOLA", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("EMAILS BO BRAZIL", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CAN_ETA_BO", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BRAZAGI", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("RADAR MONITOR", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("NC NOLA", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("SONOPLAFLIP", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("OPEN OR1", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("p_Zero Dollar Pending", "Zero Dollar Pending", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FORMATO PEDIDOS LATAM", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PR MANUALL ALLOCATION", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BLOCKORDERS", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("UYSOR", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MACONFACO", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BTC_Despachos_Cruz_Verde", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FIC", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BUC SAP", "SQL", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("SOLADIBDEL", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FORMATO PEDIDOS LATAM", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CFDI_Mex_System", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("REPORTINGV2", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("KPI INVOICE ERROR BRAZIL", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FARMAQUIRURGICOS_INV", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("TIRILLAS BTC", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CIRARG", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("S003 FOB SHIPPING POINT", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FBL1N-EMPLOYEES", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DISPUTES_US", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("LT IDS DROP", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MEDIMAS", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BANKOI", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CR_DR_Reference", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MARLY TEMPLATES", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("p_Return Notification", "Return Notification", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("UNIVERSAL WINSHUTTLE", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PEID", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("p_MDNS", "MDNS", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("APPI_SOLA", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("AngioOccidente_WS_Template", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CONSDESO", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("APPI_NOLA", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ZOTC_MB51_US_CAN", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BRAZAGI", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("TRACKER", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FXALATRPT", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("APACCR", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CHIPOP", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("IDS BILLING DETAILS", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("TRACKER", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CAN_ETA_BO", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MEDIMAS", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Bot Facturas DIAN", "Automation Anywhere", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("RADAR MONITOR", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("UYSOR", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Power BI DashBoard Invocing LatAm", "Power BI", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BTC_BTB_REP", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PAYMENTREPORT", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ORDER ACKNOWLEDGMENT", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FBL5N_CUST_EXTRACT", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("TRACKING NUMBER", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MEXPOP", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("WEI05 IDOC NUMBER", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BANKOI", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("IDOC FAILURE PANAMA", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MX_CQ_REPORT", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FUNNEL", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("APACCR 2,0", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BRAZIL_SLOC8000", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CFDI_Monitor", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("PAYROLLBR", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DISPUTES_US", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BSRPJT", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CONCBREVE", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BTC_MX_ORDENES_PAGOS_PROGRAMADOS", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("p_ZECR Special Credit", "ZECR Special Credit", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Saving 24/7", "Power Platforms", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ORR LATAM", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FalconSoft_Touchless", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("IDS BILLING DETAILS", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MAN S194 OPEN ORDER", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("p_FAST", "FAST", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MACADSURG", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FBL5N_CUST_EXTRACT", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("p_3G Erosion", "3G Erosion", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("p_ERRS", "ERRS", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ARPOP", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CHISOR", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("DIB_DVL", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CONCBREVE", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FIC BRAZIL", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ORR LATAM", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MARLY TEMPLATES", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CAN_SHIP_SWICH", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("MEXPACI", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("p_SPMS", "SPMS", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Power BI DashBoard Invocing LatAm", "SQL", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("UNOPS MX", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CHIPOP", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("Fiori Inquiry Apps", "SAP", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FORMATO PEDIDOS BRAZIL", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("APPI_SOLA", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ALERTNOT", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("OPEN ORDER", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CELA MANUAL ALLOCATION", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("APPAYM", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CIRPE", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("UNOPS MX", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("UYSOR", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CIRARG", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("NC NOLA", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("SAP TPS", "SAP", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BTC_System_Validation", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BTC_BTB_REP", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BTC_System_Validation", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CELA MANUAL ALLOCATION", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("IDOC FAILURE PANAMA", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("RETIDISTRIARG", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("ENVIROACCRUAL", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("AGINGREPORT 2,0", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FXCANADA", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BRAZIL_SLOC8000", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("RETIDISTRIARG", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("BANKOI", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("EMAIL ORR SOLA", "Access DB", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("CAN_SHIP_SWICH", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("AGINGREPORT 2,0", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FORMATO PEDIDOS BRAZIL", "VBA", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FXALATRPT", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });
        graph.addEdge("FBL1N-EMPLOYEES", "Winshuttle", { type: "arrow", label: "utiliza", size: 2, color: "#ccc" });

        // Inicializar Sigma con el gráfico y el contenedor
        sigmaInstance.current = new Sigma(graph, containerRef.current, {
            nodeProgramClasses: {
                image: NodeImageProgram,
            },
            renderEdgeLabels: true,
            renderLabels: true
        });

        sigmaInstance.current.on("enterNode", (event) => {
            const nodeId = event.node;
            const neighbors = graph.neighbors(nodeId);

            graph.nodes().forEach((node) => {
                if (node === nodeId || neighbors.includes(node)) {
                    // Mantener la imagen para el nodo actual y sus vecinos
                } else {
                    // Elimina la imagen para los nodos no relacionados
                    // graph.setNodeAttribute(node, 'image', null);
                    graph.setNodeAttribute(node, 'hidden', true);
                }
            });
        });

        sigmaInstance.current.on("leaveNode", (event) => {
            graph.nodes().forEach((node) => {
                const originalImage = graph.getNodeAttribute(node, 'originalImage');
                // graph.setNodeAttribute(node, 'image', originalImage);
                graph.setNodeAttribute(node, 'hidden', false);
            });
        });

        // Limpiar el renderizador cuando el componente se desmonte
        return () => sigmaInstance.current.kill();
    }, []);

    // Funciones para controlar el zoom
    const zoomIn = () => {
        sigmaInstance.current.getCamera().animatedZoom({ duration: 300 });
    };

    const zoomOut = () => {
        sigmaInstance.current.getCamera().animatedUnzoom({ duration: 300 });
    };

    const resetCamera = () => {
        sigmaInstance.current.getCamera().animatedReset({ duration: 300 });
    };

    const showAllGraphs = () => {
        sigmaInstance.current.getGraph().nodes().forEach((node) => {
            const originalImage = sigmaInstance.current.getGraph().getNodeAttribute(node, 'originalImage');
            sigmaInstance.current.getGraph().setNodeAttribute(node, 'hidden', false);
        });
    }

    const handleSearch = (event) => {
        event.preventDefault();
        const results = sigmaInstance.current.getGraph().filterNodes((key, attributes) => {
            return attributes.label.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setSearchResults(results.map(nodeId => ({
            id: nodeId,
            label: sigmaInstance.current.getGraph().getNodeAttribute(nodeId, 'label'),
            image: sigmaInstance.current.getGraph().getNodeAttribute(nodeId, 'image')
        })));
    };

    const handleNodeSelect = (nodeId) => {
        const neighbors = sigmaInstance.current.getGraph().neighbors(nodeId);
        showAllGraphs();

        sigmaInstance.current.getGraph().nodes().forEach((node) => {
            if (node === nodeId || neighbors.includes(node)) {
                // Mantener la imagen para el nodo actual y sus vecinos
            } else {
                // Elimina la imagen para los nodos no relacionados
                // sigmaInstance.current.getGraph().setNodeAttribute(node, 'image', null);
                sigmaInstance.current.getGraph().setNodeAttribute(node, 'hidden', true);
            }
        });
    };

    const handleClearSearch = () => {
        setSearchTerm("");
        setSearchResults([]);
        showAllGraphs();
    };

    const Section = (props) => {

        return <div className='position-relative w-100 p-2 border rounded' style={{ maxHeight: 200, overflow: "scroll" }}>
            {searchResults.map(result => (
                <div className='search-item d-flex flex-column' key={result.id} onClick={() => handleNodeSelect(result.id)}>
                    <div className='d-flex justify-content-start align-items-center my-1'>
                        <div className='mx-2'><img src={result.image} width="30" height="30" /></div>
                        <div>{result.label}</div>
                    </div>
                </div>
            ))}
        </div>
    }

    return (
        <div>
            <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />
            <div className='card' style={{ position: 'fixed', top: '1em', left: '1em' }}>
                <div className='d-flex flex-column position-relative m-2'>
                    <form className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar un nodo..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-outline-secondary" type="submit" onClick={handleSearch}>
                            <CiSearch />
                        </button>
                        <button className="btn btn-outline-danger" type="button" onClick={handleClearSearch}>
                            <GrClearOption />
                        </button>
                    </form>
                    {searchResults.length > 0 ? <Section /> : null}
                </div>
                <div className='d-flex m-2'>
                    <button className="btn btn-light mx-1 border" style={{ fontSize: "25px" }} onClick={zoomIn}><MdZoomIn /></button>
                    <button className="btn btn-light mx-1 border" style={{ fontSize: "25px" }} onClick={zoomOut}><MdZoomOut /></button>
                    <button className="btn btn-light mx-1 border" style={{ fontSize: "25px" }} onClick={resetCamera}><MdRefresh /></button>
                </div>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-start align-items-center my-2'>
                        <div className='mx-2'><img src="https://cdn-icons-png.freepik.com/512/7160/7160417.png" width="30" height="30" /></div>
                        <div>Categoría</div>
                    </div>
                </div>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-start align-items-center my-2'>
                        <div className='mx-2'><img src="https://cdn-icons-png.freepik.com/512/7160/7160472.png" width="30" height="30" /></div>
                        <div>Tecnología</div>
                    </div>
                </div>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-start align-items-center my-2'>
                        <div className='mx-2'><img src="https://cdn-icons-png.freepik.com/512/7160/7160438.png" width="30" height="30" /></div>
                        <div>Proyecto</div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default GraphComponent;
