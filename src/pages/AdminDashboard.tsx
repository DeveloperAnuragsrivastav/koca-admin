import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { LogOut, Users, Image, Menu, Plus } from "lucide-react";
import GalleryManager from "@/components/admin/GalleryManager";
import MenuManager from "@/components/admin/MenuManager";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [adminUser, setAdminUser] = useState<any>(null);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAdminAuthenticated");
    const userStr = localStorage.getItem("adminUser");
    
    if (!isAuthenticated || isAuthenticated !== "true") {
      navigate("/admin");
      return;
    }

    if (userStr) {
      setAdminUser(JSON.parse(userStr));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    localStorage.removeItem("adminUser");
    toast.success("Logged out successfully");
    navigate("/admin");
  };

  if (!adminUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">KOCA Admin Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Welcome, {adminUser.username}
            </span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Gallery Items</CardTitle>
                <Image className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {JSON.parse(localStorage.getItem("gallery") || "[]").length}
                </div>
                <p className="text-xs text-muted-foreground">Total gallery images</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Menu Items</CardTitle>
                <Menu className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {JSON.parse(localStorage.getItem("menu") || "[]").length}
                </div>
                <p className="text-xs text-muted-foreground">Total menu items</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Admin Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-xs text-muted-foreground">Active admin users</p>
              </CardContent>
            </Card>
          </div>

          {/* Management Tabs */}
          <Card>
            <CardHeader>
              <CardTitle>Content Management</CardTitle>
              <CardDescription>
                Manage gallery images and menu items for the KOCA website
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="gallery" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="gallery">Gallery Management</TabsTrigger>
                  <TabsTrigger value="menu">Menu Management</TabsTrigger>
                </TabsList>
                
                <TabsContent value="gallery" className="space-y-4">
                  <GalleryManager />
                </TabsContent>
                
                <TabsContent value="menu" className="space-y-4">
                  <MenuManager />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;