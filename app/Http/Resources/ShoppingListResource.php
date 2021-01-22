<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ShoppingListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
       return[
           'id' => $this->id,
           'name' => $this->name,
           'complete' => $this->complete,
           'notes' => $this->notes,
           'shop' => ShopResource::make($this->shop),
           'createdAt' => $this->created_at,
           'updatedAt' => $this->updated_at,
       ];
    }
}
