import matplotlib.pyplot as plt

circle = plt.Circle((0, 0), 1, fill = False)
plt.gca().add_patch(circle)
plt.axis('scaled')
plt.show()