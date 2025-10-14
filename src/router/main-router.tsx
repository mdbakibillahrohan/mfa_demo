import { lazy, Suspense } from "react";
import { Spin } from "antd";
import type { RouteObject } from "react-router";
import PickingPage from "../pages/PickingPage";
import PutawayPage from "../pages/PutawayPage";
import ReportsPage from "../pages/ReportPage";
import ShippingPage from "../pages/ShippingPage";
import PackingPage from "../pages/PackingPage";

const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const ReceivingConsignmentPage = lazy(
  () => import("../pages/ReceivingConsignmentPage")
);
const QualityControlPage = lazy(() => import("../pages/QualityControlPage"));
const InventoryManagementPage = lazy(
  () => import("../pages/InventoryMangementPage")
);

const MainRouter: RouteObject[] = [
  {
    path: "*",
    element: <div>Module will be loaded here</div>,
  },
  {
    path: "dashboard",
    element: (
      <Suspense
        fallback={
          <Spin fullscreen tip="Loading the system. Just a moment please...." />
        }
      >
        <DashboardPage />
      </Suspense>
    ),
  },
  {
    path: "receiving",
    element: (
      <Suspense
        fallback={
          <Spin fullscreen tip="Loading the system. Just a moment please...." />
        }
      >
        <ReceivingConsignmentPage />
      </Suspense>
    ),
  },
  {
    path: "quality-control",
    element: (
      <Suspense
        fallback={
          <Spin fullscreen tip="Loading the system. Just a moment please...." />
        }
      >
        <QualityControlPage />
      </Suspense>
    ),
  },
  {
    path: "inventory",
    element: (
      <Suspense
        fallback={
          <Spin fullscreen tip="Loading the system. Just a moment please...." />
        }
      >
        <InventoryManagementPage />
      </Suspense>
    ),
  },
  {
    path: "picking",
    element: (
      <Suspense
        fallback={
          <Spin fullscreen tip="Loading the system. Just a moment please...." />
        }
      >
        <PickingPage />
      </Suspense>
    ),
  },
  {
    path: "putaway",
    element: (
      <Suspense
        fallback={
          <Spin fullscreen tip="Loading the system. Just a moment please...." />
        }
      >
        <PutawayPage />
      </Suspense>
    ),
  },
  {
    path: "reports",
    element: (
      <Suspense
        fallback={
          <Spin fullscreen tip="Loading the system. Just a moment please...." />
        }
      >
        <ReportsPage />
      </Suspense>
    ),
  },
  {
    path: "shipping",
    element: (
      <Suspense
        fallback={
          <Spin fullscreen tip="Loading the system. Just a moment please...." />
        }
      >
        <ShippingPage />
      </Suspense>
    ),
  },
  {
    path: "packing",
    element: (
      <Suspense
        fallback={
          <Spin fullscreen tip="Loading the system. Just a moment please...." />
        }
      >
        <PackingPage />
      </Suspense>
    ),
  },
];

export default MainRouter;
