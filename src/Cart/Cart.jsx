import React, { useContext } from "react";
import { useCart } from "react-use-cart";
import { apiValue } from "../Data/AllData";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Cart() {
  const {
    items,
    totalItems,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  const data = useContext(apiValue);

  const cartStyles = {
    productCard: {
      backgroundColor: "#fff",
      borderRadius: "15px",
      padding: "20px",
      marginBottom: "20px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      border: "1px solid #f0f0f0",
    },
    gameImage: {
      borderRadius: "15px",
      maxHeight: "120px",
      objectFit: "cover",
      width: "100%",
    },
    summaryCard: {
      backgroundColor: "#0071f8",
      background: "linear-gradient(135deg, #0071f8 0%, #ee626b 100%)",
      color: "white",
      padding: "25px",
      borderRadius: "15px",
      boxShadow: "0 8px 25px rgba(0, 113, 248, 0.3)",
    },
    priceTag: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "#0071f8",
    },
    discountPrice: {
      fontSize: "0.9rem",
      color: "#999",
      textDecoration: "line-through",
    },
  };

  if (items.length === 0) {
    return (
      <div className="section">
        <section className="shopping-cart">
          <div className="container">
            <div className="text-center">
              <div
                style={{
                  fontSize: "4rem",
                  color: "#ddd",
                  marginBottom: "15px",
                }}>
                🎮
              </div>
              <h2 style={{ color: "#0071f8", marginBottom: "15px" }}>
                Your Gaming Cart is Empty
              </h2>
              <p
                style={{
                  color: "#666",
                  fontSize: "1.1rem",
                  marginBottom: "30px",
                }}>
                Looks like you haven't added any games to your cart yet.
                <br />
                Browse our collection and find your next gaming adventure!
              </p>
              <Link to="/shop" className="btn btn-primary shakeAnimate">
                <i className="fa fa-gamepad me-2 "></i>
                Start Shopping
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="section">
      <section className="shopping-cart">
        <div className="container">
          <div className="text-center mb-5">
            <h2
              style={{
                color: "#0071f8",
                fontSize: "2.5rem",
                fontWeight: "bold",
              }}>
              🛒 Your Gaming Cart
            </h2>
            <p style={{ color: "#666", fontSize: "1.1rem" }}>
              {totalUniqueItems} game{totalUniqueItems !== 1 ? "s" : ""}{" "}
              selected • {totalItems} total items
            </p>
          </div>
          <div className="content">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="items">
                  {items.map((item, index) => {
                    return (
                      <div
                        className="product"
                        key={item.id}
                        style={cartStyles.productCard}>
                        <div className="row align-items-center">
                          <div className="col-md-3">
                            <img
                              className="img-fluid"
                              src={item.images[0]}
                              alt={item.title}
                              style={cartStyles.gameImage}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "assets/images/default-game.jpg";
                              }}
                            />
                          </div>
                          <div className="col-md-9">
                            <div className="info">
                              <div className="row align-items-center">
                                <div className="col-md-5">
                                  <div className="product-name">
                                    <h5
                                      style={{
                                        color: "#333",
                                        fontWeight: "bold",
                                        marginBottom: "10px",
                                      }}>
                                      {item.title}
                                    </h5>
                                    <div className="product-info">
                                      <div className="mb-1">
                                        <span
                                          className="badge"
                                          style={{
                                            backgroundColor: "#ee626b",
                                            color: "white",
                                            marginRight: "5px",
                                          }}>
                                          {item.category}
                                        </span>
                                        {item.genre && (
                                          <span className="badge bg-secondary">
                                            {item.genre}
                                          </span>
                                        )}
                                      </div>
                                      <div
                                        style={{
                                          fontSize: "0.9rem",
                                          color: "#666",
                                        }}>
                                        <div>
                                          <i className="fa fa-desktop me-1"></i>
                                          {item.platform || "PC"}
                                        </div>
                                        <div>
                                          <i className="fa fa-star text-warning me-1"></i>
                                          {item.rating}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4 text-center">
                                  <label
                                    className="form-label fw-bold"
                                    style={{ color: "#333" }}>
                                    Quantity
                                  </label>
                                  <div className="d-flex align-items-center justify-content-center mb-2">
                                    <span
                                      className="mx-3 fw-bold fs-5"
                                      style={{ color: "#0071f8" }}>
                                      {item.quantity}
                                    </span>
                                  </div>
                                  <div className="btn-group" role="group">
                                    <button
                                      onClick={() => {
                                        updateItemQuantity(
                                          item.id,
                                          item.quantity - 1
                                        );
                                        if (item.quantity > 1) {
                                          toast.info(
                                            `${item.title} quantity decreased`
                                          );
                                        }
                                      }}
                                      disabled={item.quantity <= 1}
                                      className="btn btn-sm shakeAnimate"
                                      style={{
                                        backgroundColor: "#fff3cd",
                                        border: "1px solid #ffeaa7",
                                        color: "#856404",
                                        borderRadius: "8px 0 0 8px",
                                      }}>
                                      <i className="fa fa-minus"></i>
                                    </button>
                                    <button
                                      onClick={() => {
                                        updateItemQuantity(
                                          item.id,
                                          item.quantity + 1
                                        );
                                        toast.info(
                                          `${item.title} quantity increased`
                                        );
                                      }}
                                      className="btn btn-sm mx-2 shakeAnimate"
                                      style={{
                                        backgroundColor: "#d1ecf1",
                                        border: "1px solid #bee5eb",
                                        color: "#0c5460",
                                        borderRadius: "0",
                                      }}>
                                      <i className="fa fa-plus"></i>
                                    </button>
                                    <button
                                      onClick={() => {
                                        removeItem(item.id);
                                        toast.error(
                                          `${item.title} removed from cart`
                                        );
                                      }}
                                      className="btn btn-sm shakeAnimate"
                                      title="Remove from cart"
                                      style={{
                                        backgroundColor: "#f8d7da",
                                        border: "1px solid #f5c6cb",
                                        color: "#721c24",
                                        borderRadius: "0 8px 8px 0",
                                      }}>
                                      <i className="fa fa-trash"></i>
                                    </button>
                                  </div>
                                </div>
                                <div className="col-md-3 text-end">
                                  <div className="price-section">
                                    {item.originalPrice &&
                                      item.originalPrice > item.price &&
                                      item.price > 0 && (
                                        <small style={cartStyles.discountPrice}>
                                          $
                                          {Math.ceil(
                                            item.originalPrice * item.quantity
                                          )}
                                        </small>
                                      )}
                                    <div style={cartStyles.priceTag}>
                                      {item.price === 0 ? (
                                        <span
                                          style={{
                                            color: "#28a745",
                                            fontWeight: "bold",
                                          }}>
                                          FREE
                                        </span>
                                      ) : (
                                        `$${Math.ceil(
                                          item.price * item.quantity
                                        )}`
                                      )}
                                    </div>
                                    {item.originalPrice &&
                                      item.originalPrice > item.price &&
                                      item.price > 0 && (
                                        <small className="text-success">
                                          Save $
                                          {Math.ceil(
                                            (item.originalPrice - item.price) *
                                              item.quantity
                                          )}
                                        </small>
                                      )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="cart-actions mt-4">
                  <button
                    onClick={emptyCart}
                    className="btn mb-2 shakeAnimate"
                    disabled={items.length === 0}
                    style={{
                      backgroundColor: "#f8d7da",
                      color: "#721c24",
                      border: "1px solid #f5c6cb",
                      borderRadius: "25px",
                      padding: "10px 25px",
                    }}>
                    <i className="fa fa-trash me-2 continueBtn"></i>
                    Clear Cart
                  </button>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="summary" style={cartStyles.summaryCard}>
                  <h3 className="mb-4 text-white">
                    <i className="fa fa-receipt me-2"></i>
                    Order Summary
                  </h3>
                  <div
                    className="summary-item d-flex justify-content-between mb-3"
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.2)",
                      paddingBottom: "10px",
                    }}>
                    <span className="text-white-50">Games ({totalItems})</span>
                    <span className="text-white fw-bold">
                      ${Math.ceil(cartTotal)}
                    </span>
                  </div>
                  <div
                    className="summary-item d-flex justify-content-between mb-3"
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.2)",
                      paddingBottom: "10px",
                    }}>
                    <span className="text-white-50">Gaming Discount</span>
                    <span className="text-warning fw-bold">-$5</span>
                  </div>
                  <div
                    className="summary-item d-flex justify-content-between mb-4"
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.2)",
                      paddingBottom: "10px",
                    }}>
                    <span className="text-white-50">Digital Delivery</span>
                    <span className="text-info">Free</span>
                  </div>
                  <div className="summary-item d-flex justify-content-between mb-4">
                    <span className="text-white fw-bold fs-4">Total</span>
                    <span className="text-white fw-bold fs-4">
                      ${Math.ceil(cartTotal - 5)}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-light btn-lg w-100 mb-3"
                    style={{
                      fontWeight: "bold",
                      borderRadius: "25px",
                      padding: "12px",
                    }}>
                    <i className="fa fa-credit-card me-2 continueBtn"></i>
                    Proceed to Checkout
                  </button>
                  <Link
                    to="/shop"
                    type="button"
                    className="btn w-100"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.2)",
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.3)",
                      borderRadius: "25px",
                      padding: "12px",
                    }}>
                    <i className="fa fa-gamepad me-2 continueBtn"></i>
                    Continue Shopping
                  </Link>

                  <div
                    className="mt-4 pt-3"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}>
                    <small className="text-white-50">
                      <i className="fa fa-shield-alt me-1"></i>
                      Secure checkout with SSL encryption
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
