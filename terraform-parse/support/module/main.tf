variable "a" {
  description = "Description"
}

variable "b" {
  type = string
}

variable "c" {
  type    = list(string)
  default = []
}

variable "d" {
  type        = map(object({ a = string, b = number, c = set(string) }))
  description = "Description"
}
