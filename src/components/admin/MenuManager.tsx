import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Plus, Edit, Trash2, Upload } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  price?: string;
  createdAt: string;
}

const MENU_CATEGORIES = [
  "APPETIZERS",
  "MAIN COURSES", 
  "DESSERTS",
  "COCKTAILS",
  "WINES"
];

const MenuManager = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    imageUrl: "",
    price: ""
  });

  useEffect(() => {
    loadMenuItems();
  }, []);

  const loadMenuItems = () => {
    const stored = localStorage.getItem("menu");
    if (stored) {
      setMenuItems(JSON.parse(stored));
    } else {
      // Initialize with some dummy data
      const dummyData: MenuItem[] = [
        {
          id: "1",
          name: "Truffle Risotto",
          description: "Creamy arborio rice with black truffle and parmesan",
          category: "MAIN COURSES",
          imageUrl: "/src/assets/food1.jpg",
          price: "$28",
          createdAt: new Date().toISOString()
        },
        {
          id: "2",
          name: "Beef Carpaccio",
          description: "Thinly sliced raw beef with arugula and capers",
          category: "APPETIZERS",
          imageUrl: "/src/assets/food2.jpg",
          price: "$18",
          createdAt: new Date().toISOString()
        },
        {
          id: "3",
          name: "Chocolate Soufflé",
          description: "Light and airy chocolate dessert with vanilla ice cream",
          category: "DESSERTS",
          imageUrl: "/src/assets/food3.jpg",
          price: "$12",
          createdAt: new Date().toISOString()
        }
      ];
      localStorage.setItem("menu", JSON.stringify(dummyData));
      setMenuItems(dummyData);
    }
  };

  const saveMenuItems = (items: MenuItem[]) => {
    localStorage.setItem("menu", JSON.stringify(items));
    setMenuItems(items);
  };

  const handleAdd = () => {
    if (!formData.name || !formData.description || !formData.category || !formData.imageUrl) {
      toast.error("Please fill all required fields");
      return;
    }

    const newItem: MenuItem = {
      id: Date.now().toString(),
      name: formData.name,
      description: formData.description,
      category: formData.category,
      imageUrl: formData.imageUrl,
      price: formData.price,
      createdAt: new Date().toISOString()
    };

    const updatedItems = [...menuItems, newItem];
    saveMenuItems(updatedItems);
    toast.success("Menu item added successfully");
    setFormData({ name: "", description: "", category: "", imageUrl: "", price: "" });
    setIsAddDialogOpen(false);
  };

  const handleEdit = () => {
    if (!editingItem || !formData.name || !formData.description || !formData.category || !formData.imageUrl) {
      toast.error("Please fill all required fields");
      return;
    }

    const updatedItems = menuItems.map(item =>
      item.id === editingItem.id
        ? { 
            ...item, 
            name: formData.name, 
            description: formData.description, 
            category: formData.category,
            imageUrl: formData.imageUrl,
            price: formData.price
          }
        : item
    );

    saveMenuItems(updatedItems);
    toast.success("Menu item updated successfully");
    setFormData({ name: "", description: "", category: "", imageUrl: "", price: "" });
    setEditingItem(null);
    setIsEditDialogOpen(false);
  };

  const handleDelete = (id: string) => {
    const updatedItems = menuItems.filter(item => item.id !== id);
    saveMenuItems(updatedItems);
    toast.success("Menu item deleted successfully");
  };

  const openEditDialog = (item: MenuItem) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      description: item.description,
      category: item.category,
      imageUrl: item.imageUrl,
      price: item.price || ""
    });
    setIsEditDialogOpen(true);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // For prototype, we'll use a placeholder URL
      const dummyUrl = `/lovable-uploads/${Date.now()}-${file.name}`;
      setFormData(prev => ({ ...prev, imageUrl: dummyUrl }));
      toast.success("Image uploaded successfully (prototype mode)");
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "APPETIZERS": "bg-blue-100 text-blue-800",
      "MAIN COURSES": "bg-green-100 text-green-800", 
      "DESSERTS": "bg-pink-100 text-pink-800",
      "COCKTAILS": "bg-purple-100 text-purple-800",
      "WINES": "bg-red-100 text-red-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const FormFields = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          placeholder="Enter menu item name"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="category">Category *</Label>
        <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {MENU_CATEGORIES.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description *</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          placeholder="Enter menu item description"
          rows={3}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="price">Price (optional)</Label>
        <Input
          id="price"
          value={formData.price}
          onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
          placeholder="e.g., $25"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Image *</Label>
        <div className="flex gap-2">
          <Input
            id="imageUrl"
            value={formData.imageUrl}
            onChange={(e) => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
            placeholder="Image URL or upload below"
          />
        </div>
        <div className="flex items-center gap-2">
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="imageUpload"
          />
          <Label htmlFor="imageUpload" className="cursor-pointer">
            <Button type="button" variant="outline" size="sm" asChild>
              <span>
                <Upload className="h-4 w-4 mr-2" />
                Upload Image
              </span>
            </Button>
          </Label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Menu Management</h3>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Menu Item
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add Menu Item</DialogTitle>
              <DialogDescription>
                Add a new item to the restaurant menu with details and image.
              </DialogDescription>
            </DialogHeader>
            <FormFields />
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAdd}>Add Item</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Menu Items</CardTitle>
          <CardDescription>
            Manage your restaurant menu items by category
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {menuItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="max-w-xs truncate">{item.description}</TableCell>
                  <TableCell>{item.price || "N/A"}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditDialog(item)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Menu Item</DialogTitle>
            <DialogDescription>
              Update the menu item details.
            </DialogDescription>
          </DialogHeader>
          <FormFields />
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEdit}>Update Item</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MenuManager;