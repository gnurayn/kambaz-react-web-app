import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup } from "react-bootstrap";

const CircleUser = FaRegCircleUser as React.ElementType;
const OutlineDashboard = AiOutlineDashboard as React.ElementType;
const BookSolid = LiaBookSolid as React.ElementType;
const CalendarOutline = IoCalendarOutline as React.ElementType;
const Inbox = FaInbox as React.ElementType;
const CogSolid = LiaCogSolid as React.ElementType;

export default function KambazNavigation() {
  return (
    <ListGroup id="wd-kambaz-navigation" style={{ width: 120 }}
      className="rounded-0  position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <ListGroup.Item id="wd-neu-link" target="_blank" action
        href="https://www.northeastern.edu/"
        className="bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" /></ListGroup.Item><br />
      <ListGroup.Item to="/Kambaz/Account" as={Link}
        className="text-center border-0 bg-black text-white">
        <CircleUser className="fs-1 text text-white" /><br />
        Account </ListGroup.Item><br />
      <ListGroup.Item to="/Kambaz/Dashboard" as={Link}
        className="text-center border-0
               bg-white text-danger">
        <OutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard </ListGroup.Item><br />
      <ListGroup.Item to="/Kambaz/Dashboard" as={Link}
        className="text-white
               bg-black text-center border-0">
        <BookSolid className="fs-1 text-danger" /><br />
        Courses </ListGroup.Item><br />
      {/* complete styling the rest of the links */}
      <ListGroup.Item to="/Kambaz/Calendar" as={Link}
        className="text-white
               bg-black text-center border-0">
        <CalendarOutline className="fs-1 text-danger" /><br />
        Calendar </ListGroup.Item><br />
        <ListGroup.Item to="/Kambaz/Inbox" as={Link}
        className="text-white
               bg-black text-center border-0">
        <Inbox className="fs-1 text-danger" /><br />
        Inbox </ListGroup.Item><br />
        <ListGroup.Item to="/Labs" as={Link}
        className="text-white
               bg-black text-center border-0">
        <CogSolid className="fs-1 text-danger" /><br />
        Labs </ListGroup.Item><br />
    </ListGroup>);
}