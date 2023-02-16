import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import useAuth from "../../utilities/context/useAuth";
import SingleOrder from "../SingleOrder/SingleOrder";

const MyOrders = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  const email = user.email;
  const url = `https://carnava-server-production.up.railway.app/user/${email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);
  const deleteOrder = (id) => {
    const confirmation = window.confirm("are you sure want to delete?");
    if (confirmation) {
      const url = `https://carnava-server-production.up.railway.app/myOrders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Order Canceled");
            const remainingOrder = myOrders.filter((orde) => orde._id !== id);
            setMyOrders(remainingOrder);
          }
        });
    } else {
      return;
    }
  };
  //   console.log(myOrders);
  const orders = myOrders.map((pkg) => {
    const order = {
      orderProduct: pkg.pack,
      orderId: pkg._id,
      isPending: pkg.isPending,
    };
    return order;
  });

  return (
    <div className="text-center my-5">
      {isLoading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
        <Container id="packages" className="mt-4">
          <h2 className="text-center text-success rounded-3 border-bottom pb-3 my-5 border-dark border-5 my-5">
            My Orders.
          </h2>

          <Row className="g-4 mb-5">
            {orders.map((order) => (
              <SingleOrder
                key={order.orderId}
                order={order}
                deleteOrder={deleteOrder}
              ></SingleOrder>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default MyOrders;
