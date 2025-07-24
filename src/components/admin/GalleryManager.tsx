import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { Plus, Edit, Trash2, Upload } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
}

const GalleryManager = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: ""
  });

  useEffect(() => {
    loadGalleryItems();
  }, []);

  const loadGalleryItems = () => {
    const stored = localStorage.getItem("gallery");
    if (stored) {
      setGalleryItems(JSON.parse(stored));
    } else {
      // Initialize with some dummy data
      const dummyData: GalleryItem[] = [
        {
          id: "1",
          title: "Chef's Special",
          description: "Our signature dish prepared with finest ingredients",
          imageUrl: "/lovable-uploads/47fe7912-2d28-43f6-a05a-34e6589897fd.png",
          createdAt: new Date().toISOString()
        },
        {
          id: "2",
          title: "Restaurant Interior",
          description: "Beautiful ambiance for dining experience",
          imageUrl: "/lovable-uploads/8ba101ff-cbfc-47b4-8415-03709955140f.png",
          createdAt: new Date().toISOString()
        }
      ];
      localStorage.setItem("gallery", JSON.stringify(dummyData));
      setGalleryItems(dummyData);
    }
  };

  const saveGalleryItems = (items: GalleryItem[]) => {
    localStorage.setItem("gallery", JSON.stringify(items));
    setGalleryItems(items);
  };

  const handleAdd = () => {
    if (!formData.title || !formData.description || !formData.imageUrl) {
      toast.error("Please fill all fields");
      return;
    }

    const newItem: GalleryItem = {
      id: Date.now().toString(),
      title: formData.title,
      description: formData.description,
      imageUrl: formData.imageUrl,
      createdAt: new Date().toISOString()
    };

    const updatedItems = [...galleryItems, newItem];
    saveGalleryItems(updatedItems);
    toast.success("Gallery item added successfully");
    setFormData({ title: "", description: "", imageUrl: "" });
    setIsAddDialogOpen(false);
  };

  const handleEdit = () => {
    if (!editingItem || !formData.title || !formData.description || !formData.imageUrl) {
      toast.error("Please fill all fields");
      return;
    }

    const updatedItems = galleryItems.map(item =>
      item.id === editingItem.id
        ? { ...item, title: formData.title, description: formData.description, imageUrl: formData.imageUrl }
        : item
    );

    saveGalleryItems(updatedItems);
    toast.success("Gallery item updated successfully");
    setFormData({ title: "", description: "", imageUrl: "" });
    setEditingItem(null);
    setIsEditDialogOpen(false);
  };

  const handleDelete = (id: string) => {
    const updatedItems = galleryItems.filter(item => item.id !== id);
    saveGalleryItems(updatedItems);
    toast.success("Gallery item deleted successfully");
  };

  const openEditDialog = (item: GalleryItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      description: item.description,
      imageUrl: item.imageUrl
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

  const FormFields = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          placeholder="Enter gallery item title"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          placeholder="Enter gallery item description"
          rows={3}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
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
        <h3 className="text-lg font-semibold">Gallery Management</h3>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Gallery Item
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Gallery Item</DialogTitle>
              <DialogDescription>
                Add a new item to the gallery with image, title, and description.
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
          <CardTitle>Gallery Items</CardTitle>
          <CardDescription>
            Manage your gallery images and descriptions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {galleryItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell className="max-w-xs truncate">{item.description}</TableCell>
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
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Gallery Item</DialogTitle>
            <DialogDescription>
              Update the gallery item details.
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

export default GalleryManager;